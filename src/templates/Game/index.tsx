import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import * as S from './style'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import TextContent, { TextContentProps } from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
    cover: string
    gameInfo: GameInfoProps
    gallery?: GalleryImageProps[]
    gameDetails: GameDetailsProps
    gameText: TextContentProps
    upcomingGames: GameCardProps[]
    upcomingHighlight: HighlightProps
    recommendedGames: GameCardProps[]
}
const Game = ({
    cover,
    gameInfo,
    gallery,
    gameDetails,
    gameText,
    upcomingGames,
    upcomingHighlight,
    recommendedGames
}: GameTemplateProps) => (
    <Base>
        <S.Cover src={cover} role="img" aria-label="cover" />

        <S.Main>
            <S.SectionGameInfo>
                <GameInfo {...gameInfo} />
            </S.SectionGameInfo>

            <S.SectionGallery>
                {!!gallery && <Gallery items={gallery} />}
            </S.SectionGallery>

            <S.SectionGameText>
                <TextContent {...gameText} />
            </S.SectionGameText>

            <S.SectionGameDetails>
                <GameDetails {...gameDetails} />
            </S.SectionGameDetails>

            <Showcase
                title="upcoming"
                games={upcomingGames}
                highlight={upcomingHighlight}
            />
            <Showcase
                title="You may like this games"
                games={recommendedGames}
            />
        </S.Main>
    </Base>
)

export default Game
