// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let allZaias = await store
        .getState()
        .blockchain.zaiaToken.methods.getZaias()
        .call();
      let allOwnerZaias = await store
        .getState()
        .blockchain.zaiaToken.methods.getOwnerZaias(account)
        .call();

      dispatch(
        fetchDataSuccess({
          allZaias,
          allOwnerZaias,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
