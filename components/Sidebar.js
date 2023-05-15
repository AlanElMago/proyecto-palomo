import './Accordion.js';

class Sidebar extends HTMLElement
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
      <!-- Sidebar -->
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExamplelabel"
      >
        <div class="offcanvas-body">
          <cc-accordion></cc-accordion>
        </div>
      </div>
    `;
  }
}

customElements.define("cc-sidebar", Sidebar);