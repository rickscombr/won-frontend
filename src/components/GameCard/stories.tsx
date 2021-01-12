import { Story, Meta } from '@storybook/react/types-6-0'

import GameCard, { GameCardProps } from '.'

export default {
    title: 'Games/GameCard',
    component: GameCard,
    argTypes: {
        onFav: { action: 'clicked' },
        ribbon: { type: 'string' }
    },
    args: {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: '/img/games/PopulationZero.png',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 200,00'
    }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)

export const withRibbon: Story<GameCardProps> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)

withRibbon.args = {
    ribbon: '30% off',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
}
