import axios from "axios";
import BASE_URL from "./endpoint";

const orderEndpoint = BASE_URL.concat("orders");

export async function postNewOrder(data) {
  try {
    const response = await axios.post(orderEndpoint, data);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function getOrders(data) {
  try {
    const { pageNumber, pageSize, sortBy, userUUID } = data;
    const response = await axios.get(orderEndpoint, { params: { pageNumber, pageSize, sortBy, userUUID }});
    return response.data;
  } catch (err) {
    throw err;
  }
}

