import jwt_decode from "jwt-decode";
import { getJwt } from "./utils/jwt";

const initState = {
  app: {
    apiPath: "http://localhost:3009/api/v1/"
  },
  authentication: {
    jwt: "",
    status: "unauthenticated"
  },
  user: {
    name: "",
    email: "",
    userId: null
  },
  storiesById: {}
};

const jwt = getJwt();

if (jwt) {
  const decodedToken = jwt_decode(jwt);
  initState.authentication.jwt = jwt;
  initState.authentication.status = "authenticated";
  initState.user.name = decodedToken.fullName;
  initState.user.email = decodedToken.email;
  initState.user.userId = decodedToken._id;
}

export default initState;
