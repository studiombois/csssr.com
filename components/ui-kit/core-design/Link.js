import React from 'react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import {
  Link as CoreDesignLink,
  link_list_s,
  link_list_m,
  link_list_l,
  link_top_menu,
  link_burger,
} from '@csssr/core-design'

const fonts = {
  list: {
    s: link_list_s,
    m: link_list_m,
    l: link_list_l,
  },
  top_menu: {
    s: link_top_menu,
    m: link_top_menu,
    l: link_top_menu,
  },
  burger: {
    s: link_burger,
    m: link_burger,
    l: link_burger,
  },
}

const Link = ({ href, as, passHref, prefetch, replace, scroll, ...props }) => (
  <NextLink
    href={href}
    as={as}
    passHref={passHref}
    prefetch={prefetch}
    replace={replace}
    scroll={scroll}
  >
    <a {...props} />
  </NextLink>
)

const LinkWithNextLink = styled(Link)`
  ${({ type, size }) => type && size && fonts[type][size]}
`

LinkWithNextLink.defaultProps = {
  type: 'list',
  size: 's',
}

const LinkWrapper = ({ /* isNextLink, passHref, prefetch, replace, scroll, */ ...props }) => {
  // Все ссылки на проекте имеют одинаковый вид
  // Для ссылок внутри проекта следует использовать isNextLink

  // Next.js раньше не умел переходить по hash ссылкам:
  // - https://github.com/zeit/next.js/issues/5161
  // - https://github.com/arielsvn/arielsvn.github.io/issues/7
  // - https://github.com/zeit/next.js/issues/5008
  // Но вроде как сейчас должен уметь, однако у нас на проекте это почему-то не происходит
  // Я пока просто уберу выбор isNextLink, выяснение причин потребует много времени, пофиксим это после релиза

  // if (isNextLink) {
  //   return (
  //     <LinkWithNextLink
  //       passHref={passHref}
  //       prefetch={prefetch}
  //       replace={replace}
  //       scroll={scroll}
  //       {...props}
  //     />
  //   )
  // }

  // Для ссылок на другие ресурсы подойдут и обычные ссылки
  return <CoreDesignLink {...props} />
}

export default LinkWrapper
