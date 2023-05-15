import { getActividad, getActividades } from "../js/HookActividades.js";

class TablaActividades extends HTMLElement
{
  constructor()
  {
    super();

    this.html = '';
    this.actividades = [];
    this.idsBotones = [];
  }

  connectedCallback()
  {
    (async() => {
      this.actividades = await getActividades();

      this.render();

      this.idsBotones.map((idBtn) => {
        const btnEditar = document.getElementById(idBtn.idBtnEditar);

        btnEditar.addEventListener('click', (e) => getActividad(e, document, idBtn.idActividad));
      });
    })()
  }

  render()
  {
    this.html = ` 
      <table class="table table-bordered bg-white mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Asunto</th>
            <th scope="col">Nombre del Solicitante</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Estado</th>
            <th scope="col">Asesor Asignado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
      <tbody>
    `;

    this.actividades.map((a) => {
      this.html += `
        <tr>
          <th scope="row">${a.id}</th>
          <td>${a.asunto}</td>
          <td>${a.nombreSolicitante}</td>
          <td>${a.prioridad.nombre}</td>
          <td>${a.estado}</td>
          <td>${a.nombreCompletoPrimerAsesorAsignado}</td>
          <td>
            <button
              id="btn-editar-actividad-${a.id}"
              type="button"
              class="btn-action details"
              data-bs-toggle="modal"
              data-bs-target="#edit-actividad"
            >
                Ver detalles
            </button>
          </td>
        </tr>
      `;

      this.idsBotones.push({
        idActividad: a.id,
        idBtnEditar: `btn-editar-actividad-${a.id}`
      });
    })

    this.html += `
        </tbody>
      </table>
    `;

    this.innerHTML = this.html;
  }
}

customElements.define("cc-tabla-actividades", TablaActividades);