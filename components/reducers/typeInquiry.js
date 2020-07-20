export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return {
        ...state,
        activeId: action.payload,
      }
    default:
      throw new Error()
  }
}
