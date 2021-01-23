import styled from 'styled-components'
import * as GameItemsStyles from 'components/GameItem/style'

export const Wrapper = styled.div`
    ${GameItemsStyles.Wrapper} {
        &:last-child {
            border-bottom: 0;
        }
    }
`
