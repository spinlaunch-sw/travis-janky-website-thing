class LabelTracker extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: 'open' });

  }
 
  connectedCallback() {

    this.shadowRoot.innerHTML = `
<style>

        :host {

          all: initial;

          display: block;

          width: 100%;

          height: 100%;

          pointer-events: none;

          position: fixed;

          top: 0;

          left: 0;

          z-index: 9999;

        }
 
        #container {

          width: 100%;

          height: 100%;

          position: relative;

        }
 
        .label-box {

          width: 20px;

          height: 20px;

          background-color: #FDDB00;

          color: black;

          font-size: 12px;

          font-weight: bold;

          font-family: 'Aldrich', sans-serif;

          display: flex;

          align-items: center;

          justify-content: center;

          position: absolute;

          border-radius: 0;

          pointer-events: none;

        }
</style>
<div id="container">
<div id="labelA" class="label-box">A</div>
<div id="labelB" class="label-box">B</div>
</div>

    `;
 
    const labelA = this.shadowRoot.querySelector("#labelA");

    const labelB = this.shadowRoot.querySelector("#labelB");
 
    let isDragging = false;
 
    window.addEventListener("mousedown", () => {

      isDragging = true;

    });
 
    window.addEventListener("mouseup", () => {

      isDragging = false;

    });
 
    window.addEventListener("mousemove", (e) => {

      if (isDragging) {

        const x = e.clientX;

        const y = e.clientY;
 
        labelA.style.left = `${x - 30}px`;

        labelA.style.top = `${y - 10}px`;
 
        labelB.style.left = `${x}px`;

        labelB.style.top = `${y - 10}px`;

      }

    });

  }

}
 
if (!customElements.get('customElement1')) {

  customElements.define('customElement1', LabelTracker);

}

 
