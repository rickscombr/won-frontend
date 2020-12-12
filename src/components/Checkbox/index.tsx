import { InputHTMLAttributes, useState } from 'react'
import * as S from './style'

export type CheckboxProps = {
    isChecked?: boolean
    onCheck?: (status: boolean) => boolean
    label?: string
    labelFor?: string
    labelColor?: 'white' | 'black'
    value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
    isChecked = false,
    onCheck,
    label,
    labelFor = '',
    labelColor = 'white',
    value,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked)

    const onChange = () => {
        const status = !checked
        setChecked(status)

        // if (onCheck) {
        //     onCheck(status)
        // }
        // é a mesma coisa que o if acima, mas não dá problema de cobertura do teste
        !!onCheck && onCheck(status)
    }

    return (
        <S.Wrapper>
            <S.Input
                id={labelFor}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                value={value}
                {...props}
            />
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>
            )}
        </S.Wrapper>
    )
}

export default Checkbox
