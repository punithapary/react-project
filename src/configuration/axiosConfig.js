import axios from "axios";
import store from "store";
import { LOGIN_URL } from "configuration/api-urls";
import { responseCodeErrors } from "messages";

import { UNAUTHORIZED_ACCESS } from "actions/types";

const axiosConfig = (() => {
  axios.interceptors.request.use(
    (config) => {
      const { userInfo } = store.getState();
      if (userInfo) {
        const {
          tokenData: { accessToken, tokenType },
        } = userInfo;
        config.headers["Authorization"] = `${tokenType} ${accessToken}`;
      } else {
        config.headers["Authorization"] = "";
        delete config.headers["Authorization"];
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const {
          response: { status },
          config: { url },
        } = error;
        const loginUrl = `${axios.defaults.baseURL}${LOGIN_URL}`;
        if (status < 500) {
          if (status === 401 && url !== loginUrl) {
            store.dispatch({
              type: UNAUTHORIZED_ACCESS,
            });
          }
          error.message = error.response.data.message;
          return Promise.reject(error);
        } else if (status >= 500) {
          error.message = responseCodeErrors[500];
          return Promise.reject(error);
        }
      } else {
        error.message = responseCodeErrors[500];
        return Promise.reject(error);
      }
      return;
    }
  );
})();

export default axiosConfig;
