import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wraperModifiers = {
    lineLeft: (theme: DefaultTheme) => css`
        padding-left: ${theme.spacings.xxsmall};
        border-left: 0.7rem solid ${theme.colors.secondary};
    `,
    lineBottom: (theme: DefaultTheme) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            border-bottom: 0.5rem solid ${theme.colors.primary};
            position: absolute;
            left: 0;
            bottom: -1rem;
            content: '';
            width: 5rem;
        }
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineBottom, lineLeft }) => css`
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors[color!]};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}

        ${lineBottom && wraperModifiers.lineBottom(theme)}
        ${lineLeft && wraperModifiers.lineLeft(theme)}
    `}
`
