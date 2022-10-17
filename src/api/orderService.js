import axios from "axios";
import BASE_URL from "./endpoint";

const orderEndpoint = BASE_URL.concat("orders");

export async function postNewOrder(data) {
    await axios.post(orderEndpoint, data).then( response => {
        return response;
    }).catch( error => {
        return error;
    })
}