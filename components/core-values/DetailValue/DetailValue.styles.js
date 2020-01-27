import { css } from '@emotion/core'
// import calcRem from '../../../utils/style/calcRem'
// import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const dynamicStyles = description => css`
  ${description.length < 2 ?
    `
      .column-1 {
        grid-column: 4 / span 6;
      }
    `
    :
    `
      .column-1 {
        grid-column: 2 / span 4;
      }

      .column-2 {
        grid-column: 7 / span 4;
      }
    `
  }
`

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  
  & {
    grid-template-rows: max-content max-content max-content;
  }

  .image {
    grid-column: 2 / span 4;
    grid-row: 1 / span 2;
  }

  .heading {
    grid-column: 7 / span 3;
    grid-row: 1;
  }

  .sub-heading {
    grid-column: 7 / span 5;
    grid-row: 2;
  }

  .description {
    grid-row: 3;
  }

  ${desktop.m} {

  }

  ${desktop.s} {
    
  }

  ${tablet.all} {
    
  }

  ${mobile.all} {
    
  }
`

const ie11Styles = ({ breakpoints: { desktop }}) => css`
  

  ${desktop.m} {
    
  }

  ${desktop.s} {
    
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const description = props.content.description

  return css`
    ${base({ breakpoints })}
    ${dynamicStyles(description)}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
