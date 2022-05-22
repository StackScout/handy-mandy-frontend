import axios from "axios";
import {
  fetchOrdersFailure,
  fetchOrdersRequest,
  fetchOrdersSuccess,
} from "../actions";

const fetchOrders = () => async (dispatch) => {
  dispatch(fetchOrdersRequest({}));

  try {
    const { data } = await axios.get("http://localhost:5000/api/orders");
    dispatch(fetchOrdersSuccess(data));
  } catch (err) {
    dispatch(fetchOrdersFailure(err));
  }
};

export { fetchOrders };
