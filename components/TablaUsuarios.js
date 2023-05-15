import { eliminarUsuario, getUsuario, getUsuarios } from "../js/HookUsuarios.js";

class TablaUsuarios extends HTMLElement
{
  constructor()
  {
    super();

    this.html = '';
    this.usuarios = [];
    this.idsBotones = [];
  }

  connectedCallback()
  {
    (async() => {
      this.usuarios = await getUsuarios();

      this.render();

      this.idsBotones.map((idBtn) => {
        const btnEditar = document.getElementById(idBtn.idBtnEditar);
        const btnEliminar = document.getElementById(idBtn.idBtnEliminar);

        btnEditar.addEventListener('click', (e) => getUsuario(e, document, idBtn.idUsuario));
        btnEliminar.addEventListener('click', (e) => eliminarUsuario(e, idBtn.idUsuario));
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
            <th scope="col">Nombre(s)</th>
            <th scope="col">Apellido(s)</th>
            <th scope="col">Correo Institucional</th>
            <th scope="col">Roles</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.usuarios.map((u) => {
      this.html += `
          <tr>
            <th scope="row">${u.id}</th>
            <td>${u.nombre}</td>
            <td>${u.apellido}</td>
            <td>${u.email}</td>
            <td>${u.roles[0].nombre}</td>
            <td>
              <button
                id="btn-editar-usuario-${u.id}"
                type="button"
                class="btn-action editar"
                data-bs-toggle="modal"
                data-bs-target="#update-user"
              >
                Editar
              </button>
              <button id="btn-eliminar-usuario-${u.id}" class="btn-action eliminar">Eliminar</button>
            </td>
          </tr>
      `;

      this.idsBotones.push({
        idUsuario: u.id,
        idBtnEditar: `btn-editar-usuario-${u.id}`,
        idBtnEliminar: `btn-eliminar-usuario-${u.id}`
      });
    })

    this.html += `
        </tbody>
      </table>
    `;

    this.innerHTML = this.html;
  }
}

customElements.define("cc-tabla-usuarios", TablaUsuarios);