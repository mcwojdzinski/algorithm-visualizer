import styled from 'styled-components'

export interface StyledBarProps {
    heightValue: number
}

export const Bar = styled.div<StyledBarProps>`
    height: ${(props) => props.heightValue * 5}px;
    width: 10px;
    background-color: black;
    border-radius: 2px 2px 0 0;
`
