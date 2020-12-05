import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
    title: 'Slider',
    component: Slider
} as Meta

const Slide = styled.div`
    background: gray;
    width: 30rem;
    padding: 10rem 0;
    border: 0.1rem solid red;
    color: white;
    text-align: center;
`

const horizontalSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}
export const Horizontal: Story = (args) => (
    <Slider {...args} settings={horizontalSettings}>
        <Slide>One</Slide>
        <Slide>Two</Slide>
        <Slide>Tree</Slide>
        <Slide>Four</Slide>
    </Slider>
)
const verticalSettings: Settings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    slidesToShow: 1
}
export const Vertical: Story = (args) => (
    <Slider {...args} settings={verticalSettings}>
        <Slide>One</Slide>
        <Slide>Two</Slide>
        <Slide>Tree</Slide>
        <Slide>Four</Slide>
    </Slider>
)
