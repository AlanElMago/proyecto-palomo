import { logout } from "../js/Logout.js";

class BarraNavegacion extends HTMLElement
{
  constructor()
  {
    super();

    this.nombreCompletoUsuario = "";
  }

  connectedCallback()
  {
    this.nombreCompletoUsuario = this.getAttribute("nombre-completo-usuario");

    this.render();

    document.getElementById("logout-btn").addEventListener("click", logout);
  }

  render()
  {
    this.innerHTML = `
      <!-- Barra de navegacion -->
      <nav class="navbar navbar-expand-lg navbar-light p-2" id="menu">
        <div class="container-fluid">
          <!-- Boton para abrir el menu -->
          <button type="button" class="fs-5 fw-bold btn-encabezado" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i class="bi bi-list"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white fw-bold h6" aria-current="page" href="main-page.html">SGRM-UAMM</a>
              </li>
            </ul>
            <div class="usuario">
              <ul class="usuario-conainer">
                <li><p class="text-white">${this.nombreCompletoUsuario}</p></li>
                <li>
                  <button id="logout-btn" class="btn-encabezado" type="button">
                    <i class="bi bi-box-arrow-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("cc-barra-navegacion", BarraNavegacion);