import {config} from '../config';

const baseUrl = config.API_HOST;
export async function apiRequest(method, path, payload) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method
  };

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(new Request(`${baseUrl}${path}`, options));
  return response.json();
}