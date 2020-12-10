import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet }, colors, language }) => css`
  & {
    margin-top: ${calcRem(11)};
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > li {
      display: flex;
    }

    & li {
      align-items: flex-end;
    }
  }

  .link {
    text-decoration: none;
  }

  .alliance {
    display: flex;
    align-items: flex-end;
    margin-left: ${calcRem(40)};
  }

  .alliance-icon {
    margin: 0 ${calcRem(4)};
  }

  .language-link {
    margin-left: ${calcRem(50)};
  }

  .policy-link {
    margin-left: 16px;
  }

  .internal-link::after {
    display: none;
  }

  .link-text {
    color: ${colors.primary.origin};
  }

  ${tablet.all} {
    .privacy-policy,
    .alliance-text,
    .alliance-link,
    .language {
      font-weight: 400;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(45)};
    }

    & li {
      flex-direction: ${language === 'ru' ? 'column' : 'row'};
      align-items: center;
    }

    .alliance {
      margin-top: ${calcRem(37)};
      margin-left: 0;
    }
    
    .language-link {
      display: none;
    }

    .privacy-policy,
    .alliance-text,
    .alliance-link,
    .language {
      font-weight: 400;
    }
  }
`

export default props => {
  const colors = props.theme.colors
  const breakpoints = props.theme.breakpoints
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, colors, language })}
  `
}
