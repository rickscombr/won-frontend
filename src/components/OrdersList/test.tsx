import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/Empty', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Empty" />
    }
}))

jest.mock('components/GameItem', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock GameItem">{children}</div>
    }
}))

describe('<OrdersList />', () => {
    it('shouder render the Order with Game Items', () => {
        const { container } = renderWithTheme(<OrdersList items={mock} />)

        expect(
            screen.getByRole('heading', { name: /my orders/i })
        ).toBeInTheDocument()

        expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('shouder render the Order with out Game Items', () => {
        renderWithTheme(<OrdersList />)

        expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
    })
})
