export const logout = (e) =>
{
  e.preventDefault();

  localStorage.removeItem("jwtToken");
  location.href = "./index.html";
}