export const actionCreator = passedData => (dispatch) => {
  dispatch({
    type: "ACTION",
    payload: passedData,
  })
}

export default actionCreator
