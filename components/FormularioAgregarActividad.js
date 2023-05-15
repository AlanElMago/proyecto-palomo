import { crearActividad } from "../js/HookActividades.js";
import { getAsesoresTecnicos } from "../js/HookUsuarios.js";

class FormularioAgregarActividad extends HTMLElement
{
  constructor()
  {
    super();

    this.html = '';
    this.asesoresTecnicos = [];
    this.form = '';
  }

  connectedCallback()
  {
    (async() => {
      this.asesoresTecnicos = await getAsesoresTecnicos();

      this.render();

      this.form = document.getElementById("form-agregar-actividad");

      document.getElementById("btn-agregar-actividad").addEventListener("click", (e) => crearActividad(e, this.form));
    })()
  }

  render()
  {
    this.html = `
      <!-- Ventana Modal Formulario Agregar Actividad -->
      <form id="form-agregar-actividad">
        <div class="modal fade" id="add-actividad" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal-add-actividad">Agregar Actividad</h5>
              </div>
              <div class="modal-body">
                <!-- Form -->
                <div class="main-container-form-activities">
                  <div class="formulario">
                    <div class="mb-3">
                      <input type="text" class="form-control" id="asunto-form-add" placeholder="Asunto">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="nombre-soli-form-add" placeholder="Nombre del Solicitante">
                    </div>
                    <div class="mb-3">
                      <select id="prioridad-form-add" class="form-select" aria-label="Default select example">
                        <option value="-1" selected>Seleccionar Prioridad...</option>
                        <option value="1">Alta</option>
                        <option value="2">Media</option>
                        <option value="3">Baja</option>
                      </select>
                   </div>
                    <div class="mb-3">
                      <select id="asesores-asignados-form-add" class="form-select" aria-label="size 3 Default select example" multiple size="3">
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
                      <textarea class="form-control" id="descripcion-form-add" placeholder="Descripción de la Actividad..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button id="btn-agregar-actividad" type="button" class="btn btn-agregar" data-bs-dismiss="modal">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    this.innerHTML = this.html;
  }
}

customElements.define("cc-formulario-agregar-actividad", FormularioAgregarActividad);