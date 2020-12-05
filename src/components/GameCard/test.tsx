import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/games/population-zero_616x353.jpg',
    price: 'R$ 150,00'
}

describe('<GameCard />', () => {
    it('shouder render the Game Card by default', () => {
        renderWithTheme(<GameCard {...props} />)

        expect(
            screen.getByRole('heading', { name: props.title })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: props.developer })
        ).toBeInTheDocument()
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            props.img
        )
        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    })

    it('should render price in label (No Promotional)', () => {
        renderWithTheme(<GameCard {...props} />)

        const price = screen.getByText(props.price)
        expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
        expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
    })

    it('should render promotional price in label (Promotional Price)', () => {
        renderWithTheme(<GameCard {...props} promotionalPrice="R$ 100,00" />)

        const price = screen.getByText(props.price)
        expect(price).toHaveStyle({ textDecoration: 'line-through' })
        expect(screen.getByText('R$ 100,00')).not.toHaveStyle({
            textDecoration: 'line-through'
        })
        expect(screen.getByText('R$ 100,00')).toHaveStyle({
            backgroundColor: theme.colors.secondary
        })
    })

    it('should render icon FavIcon if favorite is true', () => {
        renderWithTheme(<GameCard {...props} favorite />)

        expect(
            screen.getByLabelText(/remove from wishlist/i)
        ).toBeInTheDocument()
    })

    it('should rcall onFav method when favorite is clicked', () => {
        const onFav = jest.fn()
        renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

        fireEvent.click(screen.getAllByRole('button')[0])

        expect(onFav).toBeCalled()
    })

    it('shouder render Game Card with Ribbon', () => {
        renderWithTheme(
            <GameCard
                {...props}
                ribbon="30% off"
                ribbonSize="small"
                ribbonColor="secondary"
            />
        )

        const ribbon = screen.getByText(/30% off/i)
        expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
        expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    })
})
