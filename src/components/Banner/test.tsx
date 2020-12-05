import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
    img: '/banner/banner-games-1042x580.jpg',
    title: 'Defy Death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
    it('shouder render the Banner correctly', () => {
        const { container } = renderWithTheme(<Banner {...props} />)

        expect(
            screen.getByRole('heading', { name: /Defy Death/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: /Play the new CrashLands season/i
            })
        ).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
            'href',
            '/games/defy-death'
        )
        expect(
            screen.getByRole('img', { name: /Defy Death/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('shouder render the Ribbon', () => {
        renderWithTheme(
            <Banner
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
