import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import textContentMock from 'components/TextContent/mock'

import Game, { GameTemplateProps } from '.'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplateProps = {
    cover: 'bg-image.png',
    gameInfo: gameInfoMock,
    gallery: galleryMock,
    gameDetails: gameDetailsMock as GameDetailsProps,
    gameText: textContentMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gamesMock
}

jest.mock('components/Gallery', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Gallery"></div>
        }
    }
})

jest.mock('components/GameInfo', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock GameInfo"></div>
        }
    }
})
jest.mock('components/GameDetails', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock GameDetails"></div>
        }
    }
})
jest.mock('components/Showcase', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase"></div>
        }
    }
})
jest.mock('components/TextContent', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock TextContent"></div>
        }
    }
})

describe('<Game />', () => {
    it('should render Game Page', () => {
        renderWithTheme(<Game {...props} />)

        expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
        expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
        expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
        expect(screen.getByTestId('Mock TextContent')).toBeInTheDocument()

        expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    })

    it('should not render the Gallery', () => {
        renderWithTheme(<Game {...props} gallery={undefined} />)

        expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
    })
    it('should not render the Gallery on Mobile', () => {
        renderWithTheme(<Game {...props} />)

        expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
            display: 'none'
        })

        expect(
            screen.getByTestId('Mock Gallery').parentElement
        ).toHaveStyleRule('display', 'block', {
            media: '(min-width: 768px)'
        })
    })

    it('should render the Cover Image', () => {
        renderWithTheme(<Game {...props} />)

        expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
            display: 'none'
        })

        const cover = screen.getByRole('img', { name: /cover/i })
        expect(cover).toHaveStyle({
            backgroundImage: 'url(bg-image.png)',
            height: '39.5rem'
        })

        expect(cover).toHaveStyleRule('height', '70rem', {
            media: '(min-width: 768px)'
        })
        expect(cover).toHaveStyleRule(
            'clip-path',
            'polygon(0 0,100% 0,100% 100%,0 85%)',
            {
                media: '(min-width: 768px)'
            }
        )
    })
})
