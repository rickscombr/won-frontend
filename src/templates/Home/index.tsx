import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import * as S from './style'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type HomeTemplateProps = {
    banners: BannerProps[]
    newGames: GameCardProps[]
    mostPopularHighlight: HighlightProps
    mostPopularGames: GameCardProps[]
    upcommingGames: GameCardProps[]
    upcommingHighligth: HighlightProps
    upcommingMoreGames: GameCardProps[]
    freeGames: GameCardProps[]
    freeHighligth: HighlightProps
}

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighligth,
    upcommingMoreGames,
    freeGames,
    freeHighligth
}: HomeTemplateProps) => (
    <Base>
        <Container>
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <Showcase title="News" games={newGames} gamesColor="black" />
        </S.SectionNews>

        <Showcase
            title="Most Popular"
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <S.SectionUpcoming>
            <Showcase title="Upcomming" games={upcommingGames} />
            <Showcase
                highlight={upcommingHighligth}
                games={upcommingMoreGames}
            />
        </S.SectionUpcoming>

        <Showcase
            title="Free Games"
            highlight={freeHighligth}
            games={freeGames}
        />
    </Base>
)

export default Home
