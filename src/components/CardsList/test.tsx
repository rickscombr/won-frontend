import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'
import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
    it('shouder render the Cards List', () => {
        const { container } = renderWithTheme(<CardsList cards={cardsMock} />)

        expect(
            screen.getByRole('heading', { name: /my cards/i })
        ).toBeInTheDocument()

        expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
            'src',
            '/img/visa.png'
        )
        expect(
            screen.getByRole('img', { name: /mastercard/i })
        ).toHaveAttribute('src', '/img/master-card.png')

        expect(screen.getByText(/4325/)).toBeInTheDocument()
        expect(screen.getByText(/4326/)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
