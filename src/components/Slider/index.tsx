import SlickSlider, { Settings } from 'react-slick'

import * as S from './style'

export type SliderSettings = Settings

export type SliderProps = {
    children: React.ReactNode
    settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
    <S.Wrapper>
        <SlickSlider {...settings}>{children}</SlickSlider>
        <h1>Slider</h1>
    </S.Wrapper>
)

export default Slider
