import Game, { GameTemplateProps } from 'templates/Game'

import galleryMock from 'components/Gallery/mock'
import gameTextMock from 'components/TextContent/mock'
import detailsMock from 'components/GameDetails/mock'

import gameSliderMock from 'components/GameCardSlider/mock'
import upcomingHighlightMock from 'components/Highlight/mock'

export default function Index(props: GameTemplateProps) {
    return <Game {...props} />
}

// gerar em build times
export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: 'cyberpunk-2077' } }],
        fallback: false
    }
}
export function getStaticProps() {
    return {
        props: {
            cover:
                'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1920x655.jpg',
            gameInfo: {
                title: 'Cyberpunk 2077',
                price: 'R$ 59,99',
                description:
                    'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.'
            },
            gallery: galleryMock,
            gameText: gameTextMock,
            gameDetails: detailsMock,
            upcomingGames: gameSliderMock,
            upcomingHighlight: upcomingHighlightMock,
            recommendedGames: gameSliderMock
        }
    }
}
