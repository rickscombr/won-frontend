import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled.div`
    margin-top: 20rem;

    ${media.greaterThan('medium')`
        margin-top: 48rem;
    `}
`

type CoverProps = {
    src: string
}

export const Cover = styled.div<CoverProps>`
    ${({ src }) => css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 39.5rem;
        background-image: url(${src});
        background-position: top center;
        background-size: cover;
        opacity: 0.4;

        ${media.greaterThan('medium')`
            height: 70rem;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        `}
    `}
`

const Section = styled(Container).attrs({ as: 'section' })`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.xlarge};

        ${media.greaterThan('medium')`
            margin-bottom: clac(${theme.spacings.xlarge} * 2);
        `}
    `}
`
export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)`
    display: none;

    ${media.greaterThan('medium')`
        display: block;
    `}
`

export const SectionGameDetails = styled(Section)``

export const SectionGameText = styled(Section)``
