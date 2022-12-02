import BASE_URL from "./endpoint";
import axios from "axios";

const userEndpoint = BASE_URL.concat("users");

export async function createNewUser(data) {
  try {
    return await axios.post(userEndpoint, data);
  } catch (err) {
    return err;
  }
}

export async function authenticate(data) {
  try {
    const result = await axios.post(userEndpoint.concat("/login"), data);
    let { authorization } = result.headers;
    authorization = authorization.substring(authorization.indexOf(' ') + 1);
    const {id, email, username} = result.data;
    return { id, email, username, 'authorization-token': authorization};
  } catch (err) {
    return {status: err.response.status, error: err.message};
  }
}