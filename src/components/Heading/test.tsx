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
                'border-left': '0.7rem solid #f231a5'
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

    it('shouder render a heading with a small size - Footer', () => {
        renderWithTheme(<Heading size="small">Footer Title</Heading>)
        expect(screen.getByRole('heading', { name: /footer title/i })).toHaveStyle(
            {
                'font-size': '1.6rem'
            }
        )
        expect(
            screen.getByRole('heading', { name: /footer title/i })
        ).toHaveStyleRule('width', '3rem', {
            modifier: '::after'
        })
    })

    it('shouder render a heading with a line color primary', () => {
        renderWithTheme(<Heading lineColor="primary" lineLeft lineBottom>Won Games</Heading>)
        
        const heading = screen.getByRole('heading', { name: /won games/i })
        expect(heading).toHaveStyle({'border-left': '0.7rem solid #f231a5'})
        expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
            modifier: '::after'
        })
    })
    it('shouder render a heading with a line color secondary', () => {
        renderWithTheme(<Heading lineColor="secondary" lineLeft lineBottom>Won Games</Heading>)
        
        const heading = screen.getByRole('heading', { name: /won games/i })
        expect(heading).toHaveStyle({'border-left': '0.7rem solid #3cd3c1'})
        expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3cd3c1', {
            modifier: '::after'
        })
    })


})
