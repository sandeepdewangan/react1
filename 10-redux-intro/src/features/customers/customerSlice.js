const initialCustomerState = {
  fullName: "",
  adhaarNo: "",
  createdAt: "",
};

export default function reducerCustomer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        adhaarNo: action.payload.adhaarNo,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName, adhaarNo) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, adhaarNo, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: { payload: fullName },
  };
}
