import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
    title: 'Game Title',
    description: 'Game description',
    price: 'R$ 215,00'
}

describe('<GameInfo />', () => {
    it('shouder render game informations', () => {
        const { container } = renderWithTheme(<GameInfo {...props} />)

        expect(
            screen.getByRole('heading', { name: /game title/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/game description/i)).toBeInTheDocument()
        expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('shouder render game buttons', () => {
        renderWithTheme(<GameInfo {...props} />)

        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /wishlist/i })
        ).toBeInTheDocument()
    })
})
