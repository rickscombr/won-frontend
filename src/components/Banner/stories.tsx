import { Story, Meta } from '@storybook/react/types-6-0'

import Banner, { BannerProps } from '.'

export default {
    title: 'Banner',
    component: Banner,
    argTypes: {
        ribbon: {
            type: 'string'
        }
    },
    args: {
        img: '/banner/banner-games-1042x580.jpg',
        title: 'Defy Death',
        subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
        buttonLabel: 'Buy now',
        buttonLink: '/games/defy-death'
    },
    parameters: {
        layout: "fullscreen"
    }
} as Meta

export const Default: Story<BannerProps> = ( args ) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Banner { ...args } />
    </div>
)

export const withRibbon: Story<BannerProps> = ( args ) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Banner { ...args } />
    </div>
)

withRibbon.args = {
    ribbon: '30% off', 
    ribbonSize: 'normal',
    ribbonColor: 'primary'
}