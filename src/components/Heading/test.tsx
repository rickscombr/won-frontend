import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
    it('shouder render a write heading by default', () => {
        //renderiza o componente
        renderWithTheme(<Heading>Won Games</Heading>)

        // Verificar o texto de acessibilidade e a cor default
        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                color: '#fafafa'
            }
        )
    })

    it('shouder render a black heading when a color is passed', () => {
        renderWithTheme(<Heading color="black">Won Games</Heading>)
        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                color: '#030517'
            }
        )
    })

    it('shouder render a heading with a left border', () => {
        renderWithTheme(<Heading lineLeft>Won Games</Heading>)
        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                'border-left': '0.7rem solid #3cd3c1'
            }
        )
    })

    it('shouder render a heading with a bottom border', () => {
        renderWithTheme(<Heading lineBottom>Won Games</Heading>)
        expect(
            screen.getByRole('heading', { name: /won games/i })
        ).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
            modifier: '::after'
        })
    })
})
