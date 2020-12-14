import { GameCardProps } from 'components/GameCard'
import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './style'

type PickType = Pick<GameCardSliderProps, 'color'>
type GamesColor = PickType[keyof PickType]

export type ShowcaseProps = {
    title?: string
    highlight?: HighlightProps
    games?: GameCardProps[]
    gamesColor?: GamesColor
}

const Showcase = ({ title, highlight, games, gamesColor }: ShowcaseProps) => (
    <S.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} color={gamesColor} />}
    </S.Wrapper>
)

export default Showcase
