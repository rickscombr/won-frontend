import Link from  'next/link'
import Heading from "components/Heading"
import Logo from "components/Logo"
import * as S from "./style"

const Footer = () => (
    <S.Wrapper>
        <Logo color="black" />
        <S.Content>
            <S.Column>
                <Heading color="black" lineBottom lineColor="secondary" size="small">Contact Us</Heading>
                <nav aria-label="contacts">
                    <a href="mailto: ricks@ricks.com.br" title="Fale Conosco">ricks@ricks.com.br</a>
                    <a href="tel:5511999131063" title="Fale Conosco">+55 11 99913 1063</a>
                </nav>
            </S.Column>

            <S.Column>
                <Heading color="black" lineBottom lineColor="secondary" size="small">Follow Us</Heading>
                <nav aria-label="social media">
                    <a href="https://www.instagram.com/won-games" target="_blank" rel="noopenner, noreferrer">Instagram</a>
                    <a href="https://www.twitter.com/won-games" target="_blank" rel="noopenner, noreferrer">Twitter</a>
                    <a href="https://www.youtube.com/won-games" target="_blank" rel="noopenner, noreferrer">Youtube</a>
                    <a href="https://www.facebook.com/won-games" target="_blank" rel="noopenner, noreferrer">Facebook</a>
                </nav>
            </S.Column>

            <S.Column>
                <Heading color="black" lineBottom lineColor="secondary" size="small">Links</Heading>
                <nav aria-label="footer resources">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/store">
                        <a>Store</a>
                    </Link>
                    <Link href="/search">
                        <a>Search</a>
                    </Link>
                </nav>
            </S.Column>

            <S.Column>
                <Heading color="black" lineBottom lineColor="secondary" size="small">Location</Heading>
                <nav aria-label="footer resources">
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                </nav>
            </S.Column>
        </S.Content>
        <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
)

export default Footer