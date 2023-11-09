import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

interface AuthParams {
  login: string;
  senha: string;
}

async function auth({ login, senha }: AuthParams): Promise<string> {
  try {
    const { data } = await api.post('/login', {
      login,
      senha,
    });
    localStorage.setItem('userToken', data);
    return data;
  } catch (error) {
    return Promise.reject('An error has occurred');
  }
}

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const userToken =
      localStorage.getItem('userToken') || (await auth({ login: 'letscode', senha: 'lets@123' }));
    config.headers.Authorization = `Bearer ${userToken}`;
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 400) {
      window.alert('Verifique se os dados foram preenchidos corretamente e tente novamente.');
    }

    if (error.response.status === 401 && !originalRequest.__retry) {
      originalRequest._retry = true;

      try {
        const userToken = await auth({ login: 'letscode', senha: 'lets@123' });

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${userToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    return Promise.reject(error);
  }
);
