import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

const wraperModifiers = {
    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.medium};

        &::after {
            border-bottom: 0.5rem solid ${theme.colors.secondary};
            width: 3rem;
        }
    `,
    medium: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xlarge};
        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `,

    lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
        padding-left: ${theme.spacings.xxsmall};
        border-left: 0.7rem solid ${theme.colors[lineColor]};
    `,
    lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            border-bottom: 0.5rem solid ${theme.colors[lineColor]};
            position: absolute;
            left: 0;
            bottom: -1rem;
            content: '';
            width: 5rem;
        }
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineBottom, lineLeft, lineColor, size }) => css`
        color: ${theme.colors[color!]};

        ${lineBottom && wraperModifiers.lineBottom(theme, lineColor)}
        ${lineLeft && wraperModifiers.lineLeft(theme, lineColor)}
        ${!!size && wraperModifiers[size](theme)}
    `}
`
