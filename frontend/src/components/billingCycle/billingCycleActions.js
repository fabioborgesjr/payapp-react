import axios from "axios";

const URL = "http://localhost:3003/api";

export const getList = () => {
  const { data } = axios.get(`${URL}/billingCycles`);

  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: data
  };
};

export const create = bc => {
  axios.post(`${URL}/billingCycles`, bc);

  return {
    type: "NEW_BILLING_CYCLE",
    payload: bc
  };
};
