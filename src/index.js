
import './styles.scss';
import './components/sp-accordion/sp-accordion';

class SApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const ua = navigator.userAgent.toLowerCase();
    const isWebview = /(iphone|ipod|ipad).*applewebkit(?!.*safari)/i.test(ua);


    this.innerHTML = `
    <div class="box">
      JS box
    </div>
    <p>${ua}</p>
    <p>${isWebview}</p>
    `;
  }

}





customElements.define('s-app', SApp);