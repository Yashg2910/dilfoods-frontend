import {config} from '../config';
import store from "../redux/store";
import { logout } from '../redux/userSlice';
import { userSession } from './userSession';

const baseUrl = config.API_HOST;
export async function apiRequest(method, path, payload) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method
  };

  const token = userSession.getUserToken();
  if (token) {
    options.headers["authorization"] = `Bearer ${token}`;
  }

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  return fetch(new Request(`${baseUrl}${path}`, options))
  .then((response) => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        store.dispatch(logout());
      }
      return Promise.reject(response);
    }
    if (response.status === 204) {
      return null;
    }
    return response.json();
  });
}

export async function formDataReq(method, path, payload) {
  const options = {
    headers: {},
    method,
    body: payload
  }

  const token = userSession.getUserToken();
  if (token) {
    options.headers["authorization"] = `Bearer ${token}`;
  }

  return fetch(`${baseUrl}${path}`, options)
}