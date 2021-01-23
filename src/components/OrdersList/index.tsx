import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './style'

export type OrdersListProps = {
    items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
    <S.Wrapper>
        <Heading lineBottom lineColor="primary" color="black" size="small">
            My orders
        </Heading>

        {items.length ? (
            items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
        ) : (
            <Empty
                title="You have no orders yet"
                description="Go back to store and explore great games and offers"
                hasLink
            />
        )}
    </S.Wrapper>
)

export default OrdersList
