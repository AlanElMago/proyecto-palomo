import { getAsesoresTecnicos } from "../js/HookUsuarios.js";
import { actualizarActividad, eliminarActividad } from "../js/HookActividades.js";

class FormularioEditarActividad extends HTMLElement
{
  constructor()
  {
    super();

    this.asesoresTecnicos = [];
  }

  connectedCallback()
  {
    (async() => {
      this.asesoresTecnicos = await getAsesoresTecnicos();

      this.render();

      this.form = document.getElementById("form-editar-actividad");

      document.getElementById("btn-actualizar-actividad").addEventListener("click", (e) => actualizarActividad(e, this.form));
      document.getElementById("btn-eliminar-actividad").addEventListener("click", (e) => eliminarActividad(e, this.form));
    })()
  }

  render()
  {
    this.html = `
      <!-- Ventana Modal Formulario Editar Actividad -->
      <form id="form-editar-actividad">
        <div class="modal fade" id="edit-actividad" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal-edit-actividad">Agregar Actividad</h5>
              </div>
              <div class="modal-body">
                <!-- Form -->
                <input type="hidden" class="form-control" id="id-form-edit">
                <div class="main-container-form-activities">
                  <div class="formulario">
                    <div class="mb-3">
                      <input type="text" class="form-control" id="asunto-form-edit" placeholder="Asunto">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="nombre-soli-form-edit" placeholder="Nombre del Solicitante">
                    </div>
                    <div class="mb-3">
                      <select id="prioridad-form-edit" class="form-select" aria-label="Default select example">
                        <option value="-1" selected>Seleccionar Prioridad...</option>
                        <option value="1">Alta</option>
                        <option value="2">Media</option>
                        <option value="3">Baja</option>
                      </select>
                   </div>
                    <div class="mb-3">
                      <select id="asesores-asignados-form-edit" class="form-select" aria-label="size 3 Default select example" multiple size="3">
    `;
   
    if (this.asesoresTecnicos)
      this.asesoresTecnicos.map((at) => {
        this.html += `
                          <option value="${at.id}">${at.nombre + " " + at.apellido}</option>
        `;
      });

    this.html += `
                      </select>
                    </div>
                  </div>
                  <div class="area-descripcion">
                    <div class="mb-3">
                      <textarea class="form-control" id="descripcion-form-edit" placeholder="Descripción de la Actividad..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button id="btn-eliminar-actividad" type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Eliminar</button>
                <button id="btn-actualizar-actividad" type="button" class="btn btn-actualizar" data-bs-dismiss="modal">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    this.innerHTML = this.html;
  }
}

customElements.define("cc-formulario-editar-actividad", FormularioEditarActividad);