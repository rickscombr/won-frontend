import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
    title: 'Components/Highlight',
    component: Highlight,
    args: { ...item }
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
