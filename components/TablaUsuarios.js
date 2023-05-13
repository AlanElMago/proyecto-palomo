class TablaUsuarios extends HTMLElement
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
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Vazquez</td>
            <td>ejemplo1@docentes.uat.edu.mx</td>
            <td>Administrador</td>
            <td>
              <button type="button" class="btn-action editar" data-bs-toggle="modal" data-bs-target="#update-user">Editar</button>
              <button class="btn-action eliminar">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Vazquez</td>
            <td>ejemplo1@docentes.uat.edu.mx</td>
            <td>Administrador</td>
            <td>
              <button type="button" class="btn-action editar" data-bs-toggle="modal" data-bs-target="#update-user">Editar</button>
              <button class="btn-action eliminar">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Vazquez</td>
            <td>ejemplo1@docentes.uat.edu.mx</td>
            <td>Administrador</td>
            <td>
              <button type="button" class="btn-action editar" data-bs-toggle="modal" data-bs-target="#update-user">Editar</button>
              <button class="btn-action eliminar">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

customElements.define("cc-tabla-usuarios", TablaUsuarios);