import { get, post } from "../utils/request";
import apiConstants from "./apiConstants";

async function testApi() {
  return get(apiConstants.TEST);
}

async function addUser(data) {
  return post(apiConstants.ADD_USER, { data });
}

export { testApi, addUser };
