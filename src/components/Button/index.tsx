import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './style'

type ButtomTypes = AnchorHTMLAttributes<HTMLButtonElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: JSX.Element
    as?: React.ElementType
} & ButtomTypes

const Button = ({
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    ...props
}: ButtonProps) => (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button
