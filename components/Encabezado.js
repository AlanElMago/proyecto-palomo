import './Sidebar.js';
import './BarraNavegacion.js';

class Encabezado extends HTMLElement
{
  constructor()
  {
    super();
    
    this.nombreCompletoUsuario = "";
  }

  static get observedAttributes()
  {
    return ['nombre-completo-usuario'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    this.nombreCompletoUsuario = this.getAttribute("nombre-completo-usuario");

    this.render();
  }

  connectedCallback()
  {
    this.render();
  }

  render()
  {
    this.innerHTML = `
      <!-- Encabezado -->
      <header class="container-fluid color-encabezado">
        <cc-barra-navegacion nombre-completo-usuario="${this.nombreCompletoUsuario}"></cc-barra-navegacion>
        <cc-sidebar></cc-sidebar>
      </header>
    `;
  }
}

customElements.define("cc-encabezado", Encabezado);