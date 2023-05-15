import { axiosInstance } from './AxiosInstance.js';

export const getUsuarios = async() =>
{
  const response = await axiosInstance.get('/usuarios/');

  return response.data;
}

export const getAsesoresTecnicos = async() =>
{
  const response = await axiosInstance.get('/usuarios/');

  const asesoresTecnicos = response.data.filter((u) => (u.roles.find((r) => (r.nombre === "ASESOR_TECNICO"))));

  return asesoresTecnicos;
}

export const getUsuario = async(e, form, idUsuario) =>
{
  e.preventDefault();

  const response = await axiosInstance.get(`/usuarios/${idUsuario}`);
  const usuario = response.data;

  const campoId = form.querySelector('input[id="id-form-editar"]');
  const campoNombre = form.querySelector('input[id="name-form-editar"]');
  const campoApellido = form.querySelector('input[id="lastname-form-editar"]');
  const campoEmail = form.querySelector('input[id="email-form-editar"]');

  const checkBoxesRoles = {
    rol_admin: form.querySelector('input[id="admin-check-editar"]'),
    rol_moderador: form.querySelector('input[id="mod-check-editar"]'),
    rol_asesor_tecnico: form.querySelector('input[id="tech-check-editar"]')
  }

  const esAdmin = usuario.roles.find((rol) => (rol.nombre === "ADMINISTRADOR"));
  const esModerador = usuario.roles.find((rol) => (rol.nombre === "MODERADOR"));
  const esAsesorTecnico = usuario.roles.find((rol) => (rol.nombre === "ASESOR_TECNICO"));

  campoId.value = usuario.id;
  campoNombre.value = usuario.nombre;
  campoApellido.value = usuario.apellido;
  campoEmail.value = usuario.email;

  esAdmin ? checkBoxesRoles.rol_admin.checked = true : checkBoxesRoles.rol_admin.checked = false;
  esModerador ? checkBoxesRoles.rol_moderador.checked = true : checkBoxesRoles.rol_moderador.checked = false;
  esAsesorTecnico ? checkBoxesRoles.rol_asesor_tecnico.checked = true: checkBoxesRoles.rol_asesor_tecnico.checked = false;

  return response;
}

export const crearUsuario = async(e, form) =>
{
  e.preventDefault();

  const nombre = form.querySelector('input[id="name-form-add"]').value;
  const apellido = form.querySelector('input[id="lastname-form-add"]').value;
  const email = form.querySelector('input[id="email-form-add"]').value;
  const contrasena1 = form.querySelector('input[id="password-form-add"]').value;
  const contrasena2 = form.querySelector('input[id="confirm-pass-form-add"]').value;

  if (contrasena1 !== contrasena2)
    return;

  const checkBoxesRoles = {
    rol_admin: form.querySelector('input[id="admin-check-add"]'),
    rol_moderador: form.querySelector('input[id="mod-check-add"]'),
    rol_asesor_tecnico: form.querySelector('input[id="tech-check-add"]')
  }

  const usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    contrasena: contrasena1,
    roles: []
  }

  if (checkBoxesRoles.rol_admin.checked)
    usuario.roles.push({id: 1, nombre: "ADMINISTRADOR"});

  if (checkBoxesRoles.rol_moderador.checked)
    usuario.roles.push({id: 2, nombre: "MODERADOR"});

  if (checkBoxesRoles.rol_asesor_tecnico.checked)
    usuario.roles.push({id: 3, nombre: "ASESOR_TECNICO"});

  const response = await axiosInstance.post('usuarios/crear-usuario', usuario);

  window.location.reload(true);

  return response;
}

export const actualizarUsuario = async(e, form) =>
{
  e.preventDefault();

  const id = form.querySelector('input[id="id-form-editar"]').value;
  const nombre = form.querySelector('input[id="name-form-editar"]').value;
  const apellido = form.querySelector('input[id="lastname-form-editar"]').value;
  const email = form.querySelector('input[id="email-form-editar"]').value;
  const contrasena1 = form.querySelector('input[id="password-form-editar"]').value;
  const contrasena2 = form.querySelector('input[id="confirm-pass-form-editar"]').value;

  if (contrasena1 !== contrasena2)
    return;

  const checkBoxesRoles = {
    rol_admin: form.querySelector('input[id="admin-check-editar"]'),
    rol_moderador: form.querySelector('input[id="mod-check-editar"]'),
    rol_asesor_tecnico: form.querySelector('input[id="tech-check-editar"]')
  }

  const usuario = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    email: email,
    contrasena: contrasena1,
    roles: []
  }

  if (checkBoxesRoles.rol_admin.checked)
    usuario.roles.push({id: 1, nombre: "ADMINISTRADOR"});

  if (checkBoxesRoles.rol_moderador.checked)
    usuario.roles.push({id: 2, nombre: "MODERADOR"});

  if (checkBoxesRoles.rol_asesor_tecnico.checked)
    usuario.roles.push({id: 3, nombre: "ASESOR_TECNICO"});

  const response = await axiosInstance.put('/usuarios/actualizar-usuario', usuario);

  window.location.reload(true);

  return response;
}

export const eliminarUsuario = async(e, idUsuario) =>
{
  e.preventDefault(e);

  const response = await axiosInstance.delete(`/usuarios/eliminar-usuario/${idUsuario}`);

  window.location.reload(true);

  return response;
}