export default (t) => [
  {
    id: 'telegram',
    checkboxText: 'Telegram',
    inputText: t('job:contactOptions:telegram'),
    inputType: 'text',
  },
  {
    id: 'whatsapp',
    checkboxText: 'WhatsApp',
    inputText: t('job:contactOptions:whatsapp'),
    inputType: 'text',
  },
  {
    id: 'skype',
    checkboxText: 'Skype',
    inputText: t('job:contactOptions:skype'),
    inputType: 'text',
  },
  {
    id: 'phone',
    checkboxText: t('job:contactOptions:phone.checkbox'),
    inputText: t('job:contactOptions:phone.input'),
    inputType: 'tel',
  },
]
