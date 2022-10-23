import BASE_URL from "./endpoint";
import axios from "axios";

const userEndpoint = BASE_URL.concat("users");

export async function createNewUser(data) {
  await axios.post(userEndpoint, data).then( response => {
    return response;
  }).catch( error => {
    return error;
  })
}

export async function login(data) {
  await axios.post(userEndpoint.concat("/login"), data).then( response => {
    return response;
  }).catch( error => {
    return error;
  })
}