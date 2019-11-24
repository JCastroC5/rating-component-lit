import {css} from 'lit-element';

export default css`
:host {
    display: block;
}

.star {
    --iron-icon-width: 16px;
    --iron-icon-height: 16px;
    color: var(--rating-component-color, rgb(158, 158, 158));
}

.active {
    color: var(--rating-component-active-color, rgb(255, 193, 7));
}
`;