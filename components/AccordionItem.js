class AccordionItem extends HTMLElement
{
  constructor()
  {
    super();

    this.accordionNumber = "";
    this.accordionHref = "";
    this.accordionHeaderLabel = "";
    this.accordionBodyLabel = "";
  }

  connectedCallback()
  {
    this.accordionNumber = this.getAttribute("accordion-number");
    this.accordionHref = this.getAttribute("accordion-href");
    this.accordionHeaderLabel = this.getAttribute("accordion-header-label");
    this.accordionBodyLabel = this.getAttribute("accordion-body-label");

    this.render();
  }

  render()
  {
    this.innerHTML = `
      <!-- Accordion Item -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${this.accordionNumber}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${this.accordionNumber}"
            aria-expanded="true"
            aria-controls="collapse${this.accordionNumber}"
          >
            ${this.accordionHeaderLabel}
          </button>
        </h2>
        <div
          id="collapse${this.accordionNumber}"
          class="accordion-collapse collapse"
          aria-labelledby="heading${this.accordionNumber}"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <a href="${this.accordionHref}" class="color-texto">${this.accordionBodyLabel}</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cc-accordion-item", AccordionItem);