import { getActividadesPorIdUsuario, verActividad } from "../js/HookActividades.js";
import { parseJwt } from "../js/JwtUtils.js";

class MesaActividades extends HTMLElement
{
  constructor()
  {
    super();

    this.html = '';
    this.actividades = [];
    this.idsTarjetas = [];
  }

  connectedCallback()
  {
    (async() => {
      const jwtToken = localStorage.getItem('jwtToken');
      const jsonPayload = parseJwt(jwtToken);

      this.actividades = await getActividadesPorIdUsuario(jsonPayload.idUsuario);

      this.render();

      this.idsTarjetas.map((idTar) => {
        const divTarjeta = document.getElementById(idTar.idTarjeta);

        divTarjeta.addEventListener('click', (e) => verActividad(e, idTar.idActividad));
      });
    })()
  }

  render()
  {
    this.html = `
      <!-- Carta de Actividad -->
      <div class="main-container-cards">
    `;

    this.actividades.map((a) => {
      this.html += `
        <div
          class="tarjeta ${a.colorCarta}"
          id="tarjeta-act-${a.id}"
          data-bs-toggle="modal"
          data-bs-target="#activitie-modal"
        >
          <input id="id-actividad" type="hidden" value="${a.id}">
          <div class="card-titulo">${a.asunto}</div>
          <div class="card-contenido ${a.colorCarta}">
            <h5>${a.nombreSolicitante}</h5>
            <p>${a.descripcion}</p>
          </div>
        </div>
      `;

      this.idsTarjetas.push({
        idActividad: a.id,
        idTarjeta: `tarjeta-act-${a.id}`
      });
    })

    this.html += `
      </div>
    `;

    this.innerHTML = this.html;
  }
}

customElements.define("cc-mesa-actividades", MesaActividades);