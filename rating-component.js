import {html, LitElement} from "lit-element";
import '@polymer/iron-icon';
import '@polymer/iron-icons/iron-icons';
import style from './rating-component-styles';

class RatingComponent extends LitElement {
    constructor() {
        super();
        this.rate = 0;
    }

    static get properties() {
        return {
            rate: {
                type: Number
            }
        };
    }

    static get styles() {
        return style;
    }

    updated(_changedProperties) {
        if(_changedProperties.has('rate')){
            const stars = this.shadowRoot.querySelectorAll('.star');
            this.__clearStar(stars);
            for (let index = 0; index < this.rate; index++) {
                const star = stars[index];
                star.classList.add('active');
            }
        }
    }

    __clearStar(stars) {
        for (const star of stars) {
            star.classList.remove('active');
        }
    }

    render() {
        return html`
            <div class="rating-container">
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
            </div>
        `;
    }
}

window.customElements.define('rating-component', RatingComponent);