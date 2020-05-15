export default (translations) => [
  {
    id: 'telegram',
    checkboxText: 'Telegram',
    inputText: translations.job.contactOptions.telegram,
    inputType: 'text',
  },
  {
    id: 'whatsapp',
    checkboxText: 'WhatsApp',
    inputText: translations.job.contactOptions.whatsapp,
    inputType: 'text',
  },
  {
    id: 'skype',
    checkboxText: 'Skype',
    inputText: translations.job.contactOptions.skype,
    inputType: 'text',
  },
  {
    id: 'phone',
    checkboxText: translations.job.contactOptions.phone.checkbox,
    inputText: translations.job.contactOptions.phone.input,
    inputType: 'tel',
  },
]
