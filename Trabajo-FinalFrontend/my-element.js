class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode :"open"});
        this.texto=this.getAttribute('texto');
        this.imagen=this.getAttribute('img')
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =`

        ${this.getStyles()}


          <img class=foto src="${this.imagen}" alt="trist">

        `
        return template
    }

    getStyles(){
        const styles= `
        <style>
          img{
            width:100%;
            margin-bottom:20px;
            border-color: black;
            border-radius: 30px;
            background-color: #FFEFC8;
            max-width: 800px;
            justify-content: center;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
          }
            </style>
        `
        return styles
    }

    sumar(){
        this.contador++;
    }

    connectedCallback(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }



}
customElements.define('my-element', myElement);
