import './Sidebar.js';
import './BarraNavegacion.js';

class Encabezado extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Encabezado -->
      <header class="container-fluid color-encabezado">
        <cc-barra-navegacion></cc-barra-navegacion>
        <cc-sidebar></cc-sidebar>
      </header>
    `;
  }
}

customElements.define("cc-encabezado", Encabezado);