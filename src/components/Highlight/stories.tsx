import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
    title: 'Highlight',
    component: Highlight,
    args: {
        title: "Read Death it's back",
        subtitle: "Come see John's new adventures",
        backgroundImage: '/img/games/red-dead-img_1040x320.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/rdr2'
    }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
    <div style={{ maxWidth: '104rem' }}>
        <Highlight {...args} />
    </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
    <div style={{ maxWidth: '104rem' }}>
        <Highlight {...args} />
    </div>
)

WithFloatImage.args = {
    floatImage: '/img/games/red-dead-float_266x311.png'
}
