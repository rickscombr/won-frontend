import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
    it('shouder render the profile menu', () => {
        const { container } = renderWithTheme(<ProfileMenu />)

        expect(
            screen.getByRole('link', { name: /my profile/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /my cards/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /my orders/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /logout/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the menu with an active link defined', () => {
        renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

        expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
            background: theme.colors.primary,
            color: theme.colors.white
        })
    })
})
