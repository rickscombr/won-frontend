import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './style'

export type SliderSettings = Settings

export type SliderProps = {
    children: React.ReactNode
    settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
    { children, settings },
    ref
) => (
    <S.Wrapper>
        <SlickSlider ref={ref} {...settings}>
            {children}
        </SlickSlider>
    </S.Wrapper>
)

export default forwardRef(Slider)
