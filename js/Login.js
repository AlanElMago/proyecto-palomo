import { axiosInstance } from "./AxiosInstance.js";

const form = document.getElementById('login-form');
const jwtToken = localStorage.getItem("jwtToken");

if (jwtToken)
  location.href = "main-page.html";

form.addEventListener('submit', (e) => login(e));

const login = async (e) =>
{
  e.preventDefault();

  if (!jwtToken)
    delete axiosInstance.defaults.headers.Authorization;

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const authenticationRequest =
  {
    email: email,
    password: password
  }

  try {
    const response = await axiosInstance.post('/auth/login', authenticationRequest);

    localStorage.setItem("jwtToken", response.data);

    location.href = "./main-page.html";
  }
  catch (error) { 
    console.error(error);
  }
}
