import './AccordionItem.js';

class Accordion extends HTMLElement
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
      <!-- Accordion -->
      <div class="accordion" id="accordionExample">
        <cc-accordion-item
          accordion-number="One"
          accordion-href="modulo-admin_usuarios.html"
          accordion-header-label="Administrador"
          accordion-body-label="Usuarios"
        >
        </cc-accordion-item>
        <cc-accordion-item
          accordion-number="Two"
          accordion-href="modulo-mod_cat-act.html"
          accordion-header-label="Moderador"
          accordion-body-label="Catálogo de Actividades"
        >
        </cc-accordion-item>
        <cc-accordion-item
          accordion-number="Three"
          accordion-href="modulo-asesor-tec_act-asig.html"
          accordion-header-label="Asesor Técnico"
          accordion-body-label="Actividades Asignadas"
        >
        </cc-accordion-item>
      </div>
    `;
  }
}

customElements.define("cc-accordion", Accordion);