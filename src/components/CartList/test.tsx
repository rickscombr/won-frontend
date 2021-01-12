import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
    it('shouder render the heading', () => {
        const { container } = renderWithTheme(
            <CartList items={mockItems} total="R$ 705,00" />
        )

        expect(screen.getAllByRole('heading')).toHaveLength(3)
        expect(screen.getByText('R$ 705,00')).toHaveStyle({ color: '#f231a5' })

        expect(container.firstChild).toMatchSnapshot()
    })
})
