export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_PIN':
      return {
        ...state,
        id: action.payload,
      }
    default:
      throw new Error()
  }
}
