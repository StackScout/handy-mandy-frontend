export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

const action = (type, payload = {}) => {
  return { type, ...payload };
};

const createReducer =
  (type, initialState) =>
  (state = initialState, _action) => {
    switch (_action.type) {
      case type.REQUEST:
        return { ...state, fetching: true, error: null };
      case type.SUCCESS:
        return { ...state, fetching: false, data: _action.payload };
      case type.FAILURE:
        return {
          ...state,
          fetching: false,
          data: [],
          error: _action.error,
        };
      default:
        return state;
    }
  };

export { createRequestTypes, action, createReducer };
