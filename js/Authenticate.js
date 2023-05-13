import { axiosInstance } from './AxiosInstance.js';
import { parseJwt } from './JwtUtils.js';

const jwtToken = localStorage.getItem('jwtToken');

const authenticate = async (jwtToken) =>
{
  if (!jwtToken) {
    location.href = './index.html';

    return;
  }

  try {
    axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${jwtToken}`;

      return config;
    });

    const response = await axiosInstance.get('/auth/authenticate');

    console.log(response);
  }
  catch (error) {
    console.log(error);
    localStorage.removeItem('jwtToken');

    location.href = './index.html';

    return;
  }

  const jsonPayload = parseJwt(jwtToken);
  const nombreUsuario = jsonPayload.nombre;
  const apellidoUsuario = jsonPayload.apellido;
  const nombreCompletoUsuario = nombreUsuario + " " + apellidoUsuario;
  const ccEncabezado = document.getElementById('cc-encabezado');

  ccEncabezado.setAttribute("nombre-completo-usuario", nombreCompletoUsuario);

  console.log(jsonPayload);
}

authenticate(jwtToken);