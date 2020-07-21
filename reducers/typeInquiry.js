export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return {
        ...state,
        id: action.payload,
      }
    default:
      throw new Error()
  }
}
