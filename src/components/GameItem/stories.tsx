import { Story, Meta } from '@storybook/react/types-6-0'

import GameItem, { GameItemProps } from '.'

export default {
    title: 'Games/GameItem',
    component: GameItem,
    args: {
        img: 'https://source.unsplash.com/user/willianjusten/151x70',
        title: 'Read Dead Redenption 2',
        price: 'R$ 215,00'
    }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const withPaymment: Story<GameItemProps> = (args) => (
    <GameItem {...args} />
)

withPaymment.args = {
    downloadLink: 'https://wongames.com.br/games/nomedojogo',
    paymentInfo: {
        number: '**** **** **** 4326',
        flag: 'mastercard',
        img: 'img/master-card.png',
        purchaseDate: 'Purchase mage on 07/20/2020 at 20:32'
    }
}
