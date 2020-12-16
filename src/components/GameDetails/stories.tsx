import { Story, Meta } from '@storybook/react/types-6-0'

import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

export default {
    title: 'Games/GameDetails',
    component: GameDetails,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        }
    },
    args: mockGame,
    argTypes: {
        platforms: {
            control: {
                type: 'inline-check',
                options: ['windows', 'linux', 'mac']
            }
        },
        releaseDate: {
            control: {
                type: 'date'
            }
        },
        genres: {
            control: {
                type: 'inline-check',
                options: ['Action', 'Adventure', 'Role-playing', 'Narrative']
            }
        }
    }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <GameDetails {...args} />
    </div>
)
