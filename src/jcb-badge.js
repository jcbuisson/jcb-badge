import { LitElement, css, html } from 'lit'

/**
   * A custom-element which displays a badge containing a mark as a fraction
   * @attr {String} numerator - The text to display on the upper part of the fraction
   * @attr {String} denominator - The text to display on the lower part of the fraction
   * @cssprop --jcb-badge-text-color - Controls the color of the mark text (default: black)
   * @cssprop --jcb-badge-text-font-family - Controls the font family of the mark text (default: Roboto, Helvetica, Arial, sans-serif)
   */
export class Badge extends LitElement {

   static get properties() {
      return {
         numerator: { type: String },
         denominator: {type: String},
      }
   }

   constructor() {
      super()
      // default values - before override by attributes
      this.numerator = "0"
      this.denominator = "10"
   }

   render() {
      return html`
         <svg width="100%" height="100%" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- badge holder -->
            <path id="holder" d="M53.4027 3.79008C55.0032 1.83162 57.9968 1.83162 59.5973 3.79009L63.4525 8.50755C64.664 9.99003 66.7561 10.4062 68.4427 9.50017L73.8097 6.6171C76.0378 5.42019 78.8036 6.56581 79.5327 8.98768L81.2892 14.8214C81.8411 16.6546 83.6147 17.8397 85.5197 17.6481L91.5814 17.0383C94.098 16.7852 96.2148 18.902 95.9617 21.4186L95.3519 27.4804C95.1603 29.3853 96.3454 31.1589 98.1786 31.7108L104.012 33.4673C106.434 34.1964 107.58 36.9622 106.383 39.1903L103.5 44.5573C102.594 46.2439 103.01 48.336 104.492 49.5475L109.21 53.4027C111.168 55.0032 111.168 57.9968 109.21 59.5973L104.492 63.4525C103.01 64.664 102.594 66.7561 103.5 68.4427L106.383 73.8097C107.58 76.0378 106.434 78.8036 104.012 79.5327L98.1786 81.2892C96.3454 81.8411 95.1603 83.6147 95.3519 85.5197L95.9617 91.5814C96.2148 94.098 94.098 96.2148 91.5814 95.9617L85.5197 95.3519C83.6147 95.1603 81.8411 96.3454 81.2892 98.1786L79.5327 104.012C78.8036 106.434 76.0378 107.58 73.8097 106.383L68.4427 103.5C66.7561 102.594 64.664 103.01 63.4525 104.492L59.5973 109.21C57.9968 111.168 55.0032 111.168 53.4027 109.21L49.5475 104.492C48.336 103.01 46.2439 102.594 44.5573 103.5L39.1903 106.383C36.9622 107.58 34.1964 106.434 33.4673 104.012L31.7108 98.1786C31.1589 96.3454 29.3853 95.1603 27.4804 95.3519L21.4186 95.9617C18.902 96.2148 16.7852 94.098 17.0383 91.5814L17.6481 85.5196C17.8397 83.6147 16.6546 81.8411 14.8214 81.2892L8.98767 79.5327C6.56581 78.8036 5.4202 76.0378 6.61711 73.8097L9.50017 68.4427C10.4062 66.7561 9.99003 64.664 8.50755 63.4525L3.79008 59.5973C1.83162 57.9968 1.83162 55.0032 3.79009 53.4027L8.50755 49.5475C9.99003 48.336 10.4062 46.2439 9.50017 44.5573L6.6171 39.1903C5.42019 36.9622 6.56581 34.1964 8.98768 33.4673L14.8214 31.7108C16.6546 31.1589 17.8397 29.3853 17.6481 27.4804L17.0383 21.4186C16.7852 18.902 18.902 16.7852 21.4186 17.0383L27.4804 17.6481C29.3853 17.8397 31.1589 16.6546 31.7108 14.8214L33.4673 8.98767C34.1964 6.56581 36.9622 5.4202 39.1903 6.61711L44.5573 9.50017C46.2439 10.4062 48.336 9.99003 49.5475 8.50755L53.4027 3.79008Z"/>

            <!-- fraction line -->
            <line x1="82.1818" y1="31.6143" x2="30.9295" y2="82.8667" stroke="white" stroke-width="5" stroke-linecap="round"/>

            <!-- numerator -->
            <text text-anchor="middle" x="40" y="52" class="mark numerator">${this.numerator}</text>

            <!-- denominator -->
            <text text-anchor="middle" x="72" y="85" class="mark denominator">${this.denominator}</text>

         </svg>
      `
   }

   updated() {
      console.log('updated, numerator', this.numerator, 'denominator', this.denominator)
   }

   static get styles() {
      return css`
         /* :host selects the host element (<jcb-badge>, not its shadow dom) */
         :host {
            display: inline-block; /* by default a CE is inline and width & height do not apply */
            width: 100%;
            height: 100%;
         }

         :root {
         }

         #holder {
            fill: #FEAC4C;
         }

         .mark {
            fill: var(--jcb-badge-text-color, black);
            font-family: var(--jcb-badge-font-family, Roboto, Helvetica, Arial, sans-serif);
            font-weight: 500;
         }

         .numerator {
            font-size: 2.0em;
         }

         .denominator {
            font-size: 1.7em;
         }
      `
   }
}

window.customElements.define('jcb-badge', Badge)
