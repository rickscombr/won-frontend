import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Read Dead Redenption 2',
    price: 'R$ 215,00'
}

describe('<GameItem />', () => {
    it('shouder render the item', () => {
        renderWithTheme(<GameItem {...props} />)

        //verificar se o title foi renderizado
        expect(
            screen.getByRole('heading', { name: /read dead redenption 2/i })
        ).toBeInTheDocument()

        //verificar se a imagem foi renderizada
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            props.img
        )
        //verificar se o preço foi renderizado
        expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
    })

    it('shouder render the item with download link', () => {
        const downloadLink = 'https://link'

        renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

        expect(
            screen.getByRole('link', { name: `Get ${props.title} here` })
        ).toHaveAttribute('href', downloadLink)
    })

    it('shouder render the paymment info', () => {
        const paymentInfo = {
            number: '**** **** **** 4326',
            flag: 'mastercard',
            img: 'img/master-card.png',
            purchaseDate: 'Purchase mage on 07/20/2020 at 20:32'
        }

        renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

        expect(
            screen.getByRole('img', { name: paymentInfo.flag })
        ).toHaveAttribute('src', paymentInfo.img)

        expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
        expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
    })
})
