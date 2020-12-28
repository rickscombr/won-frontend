import Heading from 'components/Heading'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
    games?: GameCardProps[]
    recommendedGames: GameCardProps[]
    recommendedHighlight: HighlightProps
}

const Wishlist = ({
    games = [],
    recommendedGames,
    recommendedHighlight
}: WishlistTemplateProps) => (
    <Base>
        <Container>
            <Heading lineLeft lineColor="secondary">
                Wishlist
            </Heading>
            {games.length ? (
                <Grid>
                    {games?.map((game, index) => (
                        <GameCard key={`wishlist-${index}`} {...game} />
                    ))}
                </Grid>
            ) : (
                <Empty
                    title="Your wishlist is empty"
                    description="Games added to your wishlist will appear here"
                    hasLink
                />
            )}

            <Divider />
        </Container>
        <Showcase
            title="You may like this games"
            games={recommendedGames}
            highlight={recommendedHighlight}
        />
    </Base>
)

export default Wishlist
