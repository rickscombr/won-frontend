import * as S from './style'

const Main = ({
    title = 'Boilerplate Ricks',
    description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo-w.svg"
            alt="Imagem de um átomo com texto React Avançado ao lado."
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Um desenvolvedor sentado em frente ao computador com uma tela cheia de códigos"
        />
    </S.Wrapper>
)

export default Main
