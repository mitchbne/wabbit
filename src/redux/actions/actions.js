export const actionCreator = (passedData) => {
  return (dispatch) => {
    dispatch({
      type: "ACTION",
      data: passedData
    })
  }
}

export default actionCreator
