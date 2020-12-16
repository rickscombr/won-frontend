import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
    developer: 'Different Tales',
    releaseDate: '2020-11-21T23:00:00',
    platforms: ['windows', 'linux', 'mac'],
    publisher: 'Walkabout',
    rating: 'BR0',
    genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
    it('shouder render the Block', () => {
        const { container } = renderWithTheme(<GameDetails {...props} />)

        expect(
            screen.getByRole('heading', { name: /developer/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /release date/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /platforms/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /publisher/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /rating/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /genres/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('shouder render the Platform Icons', () => {
        renderWithTheme(<GameDetails {...props} />)

        expect(
            screen.getByRole('img', { name: /windows/i })
        ).toBeInTheDocument()
        expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    })

    it('shouder render the formated Date', () => {
        renderWithTheme(<GameDetails {...props} />)

        expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
    })

    it('shouder render the Rating when BR0 (Free)', () => {
        renderWithTheme(<GameDetails {...props} />)

        expect(screen.getByText(/free/i)).toBeInTheDocument()
    })
    it('shouder render the Rating when BR18 (+18)', () => {
        renderWithTheme(<GameDetails {...props} rating="BR18" />)

        expect(screen.getByText(/\+18/i)).toBeInTheDocument()
    })
    it('shouder render a list of Genres', () => {
        renderWithTheme(<GameDetails {...props} />)

        expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
    })
})
