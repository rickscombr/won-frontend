import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
    it('shouder render a write label by default', () => {
        //renderiza o componente
        renderWithTheme(<Logo />)

        // Verificar o texto de acessibilidade e a cor default
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#fafafa'
        })
    })

    it('shouder render a black label when a color is passed', () => {
        renderWithTheme(<Logo color="black" />)
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#030517'
        })
    })

    it('shouder render logo by default size', () => {
        //renderiza o componente
        renderWithTheme(<Logo size="normal" />)

        // Verificar o texto de acessibilidade e a cor default
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: '11rem'
        })
    })

    it('shouder render logo by large size', () => {
        //renderiza o componente
        renderWithTheme(<Logo size="large" />)

        // Verificar o texto de acessibilidade e a cor default
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: '20rem'
        })
    })

    it('shouder render a bigger logo without text if hideOnMobile', () => {
        //renderiza o componente
        renderWithTheme(<Logo hideOnMobile />)

        // Verificar o texto de acessibilidade e a cor default
        expect(
            screen.getByLabelText(/Won Games/i).parentElement
        ).toHaveStyleRule('width', '5.8rem', {
            media: '(max-width: 768px)'
        })
    })
})
