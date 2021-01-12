import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './style'

export type CartListProps = {
    items: GameItemProps[]
    total: string
}

const CartList = ({ items, total }: CartListProps) => (
    <S.Wrapper>
        {items.map((item) => (
            <GameItem key={item.title} {...item} />
        ))}
        <S.Footer>
            Total <S.Total>{total}</S.Total>
        </S.Footer>
    </S.Wrapper>
)

export default CartList
