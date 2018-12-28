import jwt_decode from "jwt-decode";
import { getJwt, authString } from "./utils/jwt";

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

export default new Promise((resolve, reject) => {
  const headers = new Headers({
    Authorization: authString(),
    "Content-Type": "application/json"
  });

  fetch("http://localhost:3009/api/v1/stories", {
    method: "GET",
    headers
  })
    .then(response => {
      if (response.status === 401) {
        reject("unauthorized");
      } else {
        return response.json();
      }
    })
    .catch(error => {
      reject(Error("It broke"));
    })
    .then(stories => {
      if (stories) {
        initState.storiesById = stories.reduce((acc, item) => {
          acc[item._id] = {
            title: item.title,
            content: item.content,
            id: item._id,
            description: item.description
          };
          return acc;
        }, {});

        initState.storyList = {
          ids: Object.keys(initState.storiesById)
        };
      }

      resolve(initState);
    });
});
