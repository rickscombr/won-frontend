import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@material-ui/icons'

import Button from '.'

describe('<Button />', () => {
    it('should render the medium size by default', () => {
        const { container } = renderWithTheme(<Button>Buy now</Button>)
        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '4rem',
            padding: '0.8rem 3.2rem',
            'font-size': '1.4rem'
        })
        expect(container.firstChild).toMatchSnapshot()
    })
    it('shouder render the small size button', () => {
        renderWithTheme(<Button size="small">Buy now</Button>)
        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '3rem',
            padding: '0.8rem',
            'font-size': '1.2rem'
        })
    })
    it('shouder render the large size button', () => {
        renderWithTheme(<Button size="large">Buy now</Button>)
        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '5rem',
            padding: '0.8rem 4.8rem',
            'font-size': '1.6rem'
        })
    })
    it('shouder render a button with full width size', () => {
        renderWithTheme(<Button fullWidth>Buy now</Button>)
        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            width: '100%'
        })
    })
    it('shouder render a button with icon', () => {
        renderWithTheme(
            <Button icon={<AddShoppingCart data-testid="icon" />}>
                Buy now
            </Button>
        )
        expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('should render Button as a link', () => {
        // exibir o componente na tela
        // const { debug, container} = renderWithTheme(<Button as="a" href="/link">Buy now</Button>)
        // debug(container)
        
        // NÃO exibir o componente na tela
        renderWithTheme(<Button as="a" href="/link">Buy now</Button>)
        
        expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '/link')
    })
})
