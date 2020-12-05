import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './style'

const props = {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/games/red-dead-img_1040x320.jpg'
}

describe('<Highlight />', () => {
    it('shouder render headings and buttom', () => {
        renderWithTheme(<Highlight {...props} />)

        expect(
            screen.getByRole('heading', { name: /Heading 1/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /Heading 2/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /buy now/i })
        ).toBeInTheDocument()
    })

    it('shouder render background image', () => {
        const { container } = renderWithTheme(<Highlight {...props} />)

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${props.backgroundImage})`
        })
    })

    it('shoud render float image', () => {
        renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            '/float-image.png'
        )
    })

    it('should render the floatImage on the right by default', () => {
        const { container } = renderWithTheme(<Highlight {...props} />)

        expect(container.firstChild).toHaveStyleRule(
            'grid-template-areas',
            "'floatimage content'"
        )
        expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
            modifier: `${S.Content}`
        })
    })

    it('should render the floatImage on the left', () => {
        const { container } = renderWithTheme(
            <Highlight {...props} alignment="left" />
        )

        expect(container.firstChild).toHaveStyleRule(
            'grid-template-areas',
            "'content floatimage'"
        )
        expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
            modifier: `${S.Content}`
        })
    })
})
