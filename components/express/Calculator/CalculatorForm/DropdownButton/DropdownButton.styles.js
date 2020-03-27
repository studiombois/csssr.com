import { css } from '@emotion/core'
import { Text } from '@csssr/core-design'

export default {
  base: props => {
    const colors = props.theme.colors

    return css`
      position: relative;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;

      ${Text} {
        margin-right: 0.5rem;
        font-weight: bold;
        color: ${colors.primary.origin};
      }

      &:hover ${Text} {
        color: ${colors.primary.darken15};
      }

      &:after {
        content: '';
        position: absolute;
        top: calc(50% - ${props.isExpanded ? '0' : '5px'});
        right: -10px;
        display: block;
        width: 5px;
        height: 5px;
        border-top: 1px solid;
        border-left: 1px solid;
        border-color: ${colors.primary.origin};
        transform: rotate(${props.isExpanded ? '45deg' : '-135deg'});
      }

      &:hover:after {
        border-color: ${colors.primary.darken15};
      }
    `
  },
}
