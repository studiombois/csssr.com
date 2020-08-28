import { FORM_ERROR } from 'final-form'
import testEmails from './testEmails'

const onSubmit = (url, formName, language) => async (values) => {
  values.formName = formName
  values.language = language
  let res

  const isTestEmail = testEmails.includes(values.email)

  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
  } catch {
    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: 'Something went wrong' }
  }

  if (res.status === 201) {
    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_success' })
    }
  } else {
    let error
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = 'Something went wrong'
    }

    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

export default onSubmit
