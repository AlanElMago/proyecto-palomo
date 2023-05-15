import { actualizarUsuario } from "../js/HookUsuarios.js";

class FormularioEditarUsuario extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    this.render();

    this.form = document.getElementById("form-editar-usuario");

    document.getElementById("btn-actualizar-usuario").addEventListener("click", (e) => actualizarUsuario(e, this.form));
  }

  render()
  {
    this.innerHTML = `
      <!-- Ventana Modal Formulario Editar Usuario -->
      <form id="form-editar-usuario">
        <div class="modal fade" id="update-user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal-update-user">Editar Usuario</h5>
              </div>
              <div class="modal-body">
                <!-- Form -->
                <input type="hidden" class="form-control" id="id-form-editar">
                <div class="mb-3">
                  <input type="text" class="form-control" id="name-form-editar" placeholder="Nombre(s)">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="lastname-form-editar" placeholder="Apellido(s)">
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="email-form-editar" placeholder="Correo Institucional">
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password-form-editar" placeholder="Nueva Contraseña">
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="confirm-pass-form-editar" placeholder="Confirmar Nueva Contraseña">
                </div>

                <!-- Check Form -->
                <h6>Roles</h6>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="admin-check-editar">
                  <label class="form-check-label" for="admin-check">Administrador</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="mod-check-editar">
                  <label class="form-check-label" for="mod-check">Moderador</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="tech-check-editar">
                  <label class="form-check-label" for="tech-check">Asesor Técnico</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" id="btn-actualizar-usuario" class="btn btn-actualizar" data-bs-dismiss="modal">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
  }
}

customElements.define("cc-formulario-editar-usuario", FormularioEditarUsuario);