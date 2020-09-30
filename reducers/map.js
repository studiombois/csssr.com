export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ADDRESS':
      return {
        id: action.payload,
      }

    default:
      throw new Error()
  }
}
