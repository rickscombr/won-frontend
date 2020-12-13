import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
        children: {
            type: 'string'
        }
    },
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
    children: 'Titulo do Componente',
    lineLeft: true
}
