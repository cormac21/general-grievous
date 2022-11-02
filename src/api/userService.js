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
    const response = await axios.post(userEndpoint.concat("/login"), data);
    let { authorization } = response.headers;
    authorization = authorization.substring(authorization.indexOf(' ') + 1);
    return { email: data.email, 'authorization-token': authorization};
  } catch (err) {
    throw err;
  }
}