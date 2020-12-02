import { useState } from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './style'

export type MenuProps = {
    username?: string
}

const Menu = ({ username }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.Wrapper>
            <MediaMatch lessThan="medium">
                <S.IconWrapper onClick={() => setIsOpen(true)}>
                    <MenuOutlinedIcon aria-label="Open Menu" />
                </S.IconWrapper>
            </MediaMatch>

            <S.LogoWrapper>
                <Logo hideOnMobile />
            </S.LogoWrapper>

            <MediaMatch greaterThan="medium">
                <S.MenuNav>
                    <S.MenuLink href="#">Home</S.MenuLink>
                    <S.MenuLink href="#">Explore</S.MenuLink>
                </S.MenuNav>
            </MediaMatch>

            <S.MenuGroup>
                <S.IconWrapper>
                    <SearchOutlinedIcon aria-label="Search" />
                </S.IconWrapper>
                <S.IconWrapper>
                    <ShoppingCartOutlinedIcon aria-label="Open Shopping Cart" />
                </S.IconWrapper>
                {!username && (
                    <MediaMatch greaterThan="medium">
                        <Button>Sign in</Button>
                    </MediaMatch>
                )}
            </S.MenuGroup>

            <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                <CloseOutlinedIcon
                    aria-label="Close Menu"
                    onClick={() => setIsOpen(false)}
                />
                <S.MenuNav>
                    <S.MenuLink href="#">Home</S.MenuLink>
                    <S.MenuLink href="#">Explore</S.MenuLink>
                    {!!username && (
                        <>
                            <S.MenuLink href="#">My account</S.MenuLink>
                            <S.MenuLink href="#">Wishlist</S.MenuLink>
                        </>
                    )}
                </S.MenuNav>

                {!username && (
                    <S.RegisterBox>
                        <Button fullWidth size="large">
                            Log in now
                        </Button>
                        <span>or</span>
                        <S.CreateAccount href="#" title="Sign Up">
                            Sign Up
                        </S.CreateAccount>
                    </S.RegisterBox>
                )}
            </S.MenuFull>
        </S.Wrapper>
    )
}

export default Menu
