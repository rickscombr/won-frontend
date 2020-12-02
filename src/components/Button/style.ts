import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
    ButtonProps,
    'size' | 'fullWidth'
>

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.sizes.xsmall};
        padding: ${theme.spacings.xxsmall};
    `,
    medium: (theme: DefaultTheme) => css`
        height: 4rem;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `,
    large: (theme: DefaultTheme) => css`
        height: 5rem;
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `,
    fullWidth: () => css`
        width: 100%;
    `,
    withIcon: (theme: DefaultTheme) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 2rem;
            height: 2rem;

            & + span {
                margin-left: ${theme.spacings.xxsmall};
            }
        }
    `
}

export const Wrapper = styled.button<WrapperProps>`
    ${({ theme, size, fullWidth, hasIcon }) => css`
        background: linear-gradient(
            180deg,
            ${theme.colors.red} 0%,
            ${theme.colors.rose} 50%
        );
        color: ${theme.colors.white};
        border: 0;
        cursor: pointer;
        border-radius: ${theme.border.radius};

        &:hover {
            background: linear-gradient(
                180deg,
                ${theme.colors.redHover} 0%,
                ${theme.colors.roseHover} 50%
            );
        }

        ${!!size && wrapperModifiers[size](theme)};
        ${!!fullWidth && wrapperModifiers.fullWidth()};
        ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    `}
`