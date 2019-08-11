import { get, post } from "../utils/request";
import apiConstants from "./apiConstants";

async function testApi() {
  return get(apiConstants.TEST);
}

export { testApi };
