import { useState, InputHTMLAttributes } from 'react'

import * as S from './style'

export type TextFieldProps = {
    onInput?: (value: string) => void
    label?: string
    labelFor?: string
    initialValue?: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    icon,
    iconPosition = 'left',
    label,
    labelFor = '',
    initialValue = '',
    disabled = false,
    onInput,
    ...props
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setValue(newValue)

        !!onInput && onInput(newValue)
    }

    return (
        <S.Wrapper disabled={disabled}>
            {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
            <S.InputWrapper>
                {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
                <S.Input
                    type="text"
                    onChange={onChange}
                    value={value}
                    iconPosition={iconPosition}
                    disabled={disabled}
                    {...props}
                />
            </S.InputWrapper>
        </S.Wrapper>
    )
}

export default TextField
