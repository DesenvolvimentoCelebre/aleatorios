export const api = "http://celebreprojetos.com.br:21066";

export const requestConfig = (method, data, token = null) => {
  let config;

  if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
