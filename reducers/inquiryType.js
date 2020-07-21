export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_INQUIRY_TYPE':
      return {
        id: action.payload,
      }

    default:
      throw new Error()
  }
}
