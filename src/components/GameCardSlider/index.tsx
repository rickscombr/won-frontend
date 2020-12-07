import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProps } from 'components/GameCard'

import * as S from './style'

const settings: SliderSettings = {
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1.2
            }
        },
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                slidesToShow: 1.1
            }
        }
    ],
    nextArrow: <ArrowForwardIosOutlinedIcon aria-label="next games" />,
    prevArrow: <ArrowBackIosOutlinedIcon aria-label="previous games" />
}

export type GameCardSliderProps = {
    items: GameCardProps[]
    color?: 'white' | 'black'
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
    <S.Wrapper color={color}>
        <Slider settings={settings}>
            {items.map((item, index) => (
                <GameCard key={index} {...item} />
            ))}
        </Slider>
    </S.Wrapper>
)

export default GameCardSlider