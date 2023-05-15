import { axiosInstance } from './AxiosInstance.js';

export const getActividades = async() =>
{
  const response = await axiosInstance.get('/actividades/');

  const actividades = response.data;

  console.log(actividades);

  actividades.map((a) => {
    a.nombreCompletoPrimerAsesorAsignado = "Ninguno";
    a.estado = "En espera";

    if (a.asesoresAsignados.length) {
      a.nombreCompletoPrimerAsesorAsignado = a.asesoresAsignados[0].nombre + " " + a.asesoresAsignados[0].apellido;
      a.estado = "En proseso";
    }

    if (a.encuestaServicio) {
      a.estado = "Terminado";
    }
  });

  return actividades;
}

export const getActividadesPorIdUsuario = async(idUsuario) =>
{
  const response = await axiosInstance.get(`/actividades/por-id-usuario/${idUsuario}`);
  const actividades = response.data;

  actividades.map((a) => {
    switch (a.prioridad.nombre) {
      case "ALTA":
        a.colorCarta = "red";
        break;
      case "MEDIA":
        a.colorCarta = "orange";
        break;
      case "BAJA":
        a.colorCarta = "blue";
    }
  });

  return actividades;
}

export const getActividad = async(e, form, idActividad) =>
{
  e.preventDefault();

  const response = await axiosInstance.get(`/actividades/${idActividad}`);
  const actividad = response.data;

  const campoId = form.querySelector('input[id="id-form-edit"]');
  const campoAsunto = form.querySelector('input[id="asunto-form-edit"]');
  const campoNombreSolicitante = form.querySelector('input[id="nombre-soli-form-edit"]');
  const campoDescripcion = form.querySelector('textarea[id="descripcion-form-edit"]');
  const campoPrioridadSeleccionada = form.querySelector('select[id="prioridad-form-edit"]');
  const asesoresSeleccionadosSelect = form.querySelector('select[id="asesores-asignados-form-edit"]');

  campoId.value = actividad.id;
  campoAsunto.value = actividad.asunto;
  campoNombreSolicitante.value = actividad.nombreSolicitante;
  campoDescripcion.value = actividad.descripcion;

  campoPrioridadSeleccionada.value = actividad.prioridad.id;

  for (var i = 0; i < asesoresSeleccionadosSelect.options.length; i++) {
    const optionElement = asesoresSeleccionadosSelect.options[i];
    optionElement.selected = actividad.asesoresAsignados.find((aa) => (aa.id == optionElement.value)) ? true : false;
  }
  
  return response;
}

export const verActividad = async(e, idActividad) =>
{
  e.preventDefault();

  const response = await axiosInstance.get(`/actividades/${idActividad}`);
  const actividad = response.data;

  const pNombreActividad = document.getElementById("p-ver-act-nombre-actividad");
  const pNombreSolicitante = document.getElementById("p-ver-act-nombre-solicitante");
  const pNombrePrioridad = document.getElementById("p-ver-act-nombre-prioridad");
  const taDescripcion = document.getElementById("ta-ver-act-descripcion");

  pNombreActividad.innerHTML = actividad.nombre;
  pNombreSolicitante.innerHTML = actividad.nombreSolicitante;
  pNombrePrioridad.innerHTML = actividad.prioridad.nombre;
  taDescripcion.innerHTML = actividad.descripcion;

  return actividad;
}

export const crearActividad = async(e, form) =>
{
  e.preventDefault();

  const asunto = form.querySelector('input[id="asunto-form-add"]').value;
  const nombreSolicitante = form.querySelector('input[id="nombre-soli-form-add"]').value;
  const descripcion = form.querySelector('textarea[id="descripcion-form-add"]').value;
  const prioridadSeleccionada = form.querySelector('select[id="prioridad-form-add"]').value;

  const asesoresSeleccionadosSelect = form.querySelector('select[id="asesores-asignados-form-add"]');
  const asesoresSeleccionados = Array.from(asesoresSeleccionadosSelect.selectedOptions).map(as => as.value);

  if (prioridadSeleccionada < 0)
    return;

  const actividad = {
    asunto: asunto,
    nombreSolicitante: nombreSolicitante,
    descripcion: descripcion,
    prioridad: {id: prioridadSeleccionada},
    asesoresAsignados: []
  }

  asesoresSeleccionados.map((as) => {actividad.asesoresAsignados.push({id: as})});

  console.log(actividad);

  const response = await axiosInstance.post('actividades/crear-actividad', actividad);

  window.location.reload(true);

  return response;
}

export const actualizarActividad = async(e, form) =>
{
  e.preventDefault();

  const idActividad = form.querySelector('input[id="id-form-edit"]').value;
  const asunto = form.querySelector('input[id="asunto-form-edit"]').value;
  const nombreSolicitante = form.querySelector('input[id="nombre-soli-form-edit"]').value;
  const descripcion = form.querySelector('textarea[id="descripcion-form-edit"]').value;
  const prioridadSeleccionada = form.querySelector('select[id="prioridad-form-edit"]').value;

  const asesoresSeleccionadosSelect = form.querySelector('select[id="asesores-asignados-form-edit"]');
  const asesoresSeleccionados = Array.from(asesoresSeleccionadosSelect.selectedOptions).map(as => as.value);

  if (prioridadSeleccionada < 0)
    return;

  const actividad = {
    id: idActividad,
    asunto: asunto,
    nombreSolicitante: nombreSolicitante,
    descripcion: descripcion,
    prioridad: {id: prioridadSeleccionada},
    asesoresAsignados: []
  }

  asesoresSeleccionados.map((as) => {actividad.asesoresAsignados.push({id: as})});

  console.log(actividad)

  const response = await axiosInstance.put('actividades/actualizar-actividad', actividad);

  window.location.reload(true);

  return response;
}

export const eliminarActividad = async(e, form) =>
{
  e.preventDefault(e);

  const idActividad = Number(form.querySelector('input[id="id-form-edit"]').value);
  const response = await axiosInstance.delete(`/actividades/eliminar-actividad/${idActividad}`);

  window.location.reload(true);

  return response;
}