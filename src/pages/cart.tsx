import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import paymentCardMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
    return <Cart {...props} />
}

export async function getServerSideProps() {
    return {
        props: {
            items: itemsMock,
            total: 'R$ 705,00',
            cards: paymentCardMock,
            recommendedGames: gamesMock,
            recommendedHighlight: highlightMock
        }
    }
}
