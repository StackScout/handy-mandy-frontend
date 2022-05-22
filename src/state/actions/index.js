import { action } from "../reducers/reducerHelper.js";
import { ORDERS } from "./actionTypes.js";

const fetchOrdersRequest = (payload) => action(ORDERS.REQUEST, {});
const fetchOrdersSuccess = (payload) => action(ORDERS.SUCCESS, { payload });
const fetchOrdersFailure = (err) => action(ORDERS.FAILURE, { err });

export { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersFailure };
