import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
    it('shouder render the text correctly', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>)
        expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
    })

    it('shouder render the primary color', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>)
        expect(screen.getByText(/Best Seller/i)).toHaveStyle({
            backgroundColor: '#f231a5'
        })
    })

    it('shouder render the secondary color', () => {
        renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
        expect(screen.getByText(/Best Seller/i)).toHaveStyle({
            backgroundColor: '#3cd3c1'
        })
    })

    it('shouder render with normal size as default', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>)
        expect(screen.getByText(/Best Seller/i)).toHaveStyle({
            height: '3.6rem',
            fontSize: '1.4rem'
        })
    })

    it('shouder render with small size is passed', () => {
        renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
        expect(screen.getByText(/Best Seller/i)).toHaveStyle({
            height: '2.6rem',
            fontSize: '1.2rem'
        })
    })
})
