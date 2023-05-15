class FormularioVerActividad extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    this.render();
  }

  render()
  {
    this.innerHTML = `
      <!-- Ventana Modal Actividades Asignadas -->
      <div class="modal fade" id="activitie-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal-update-user">
                <p id="p-ver-act-nombre-actividad">Nombre de la Actividad</p>
              </h5>
            </div>
            <div class="modal-body">
              <!-- Form -->
              <div class="main-container-form-activities">
                <div class="formulario">
                  <div class="mb-3 d-flex flex-column">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Nombre del Solicitante</h5></label>
                    <label for="exampleFormControlInput1" class="form-label">
                      <p id="p-ver-act-nombre-solicitante">Nombre del profesor</p>
                    </label>
                  </div>
                  <div class="mb-3 d-flex flex-column">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Prioridad</h5></label>
                    <label for="exampleFormControlInput1" class="form-label">
                      <p id="p-ver-act-nombre-prioridad">Tipo de Prioridad</p>
                    </label>
                  </div>
                </div>
    
                <!-- Text Area -->
                <div class="area-descripcion">
                  <div class="mb-3">
                    <textarea class="form-control" id="ta-ver-act-descripcion" placeholder="Descripción de la Actividad..."></textarea>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-salir" data-bs-dismiss="modal">Salir</button>
              <button type="button" class="btn btn-terminar-act" id="btn-terminar-act" data-bs-toggle="modal" data-bs-target="#encuesta" data-bs-dismiss="modal">Terminar Actividad</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cc-formulario-ver-actividad", FormularioVerActividad);