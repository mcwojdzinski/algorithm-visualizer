import styled from 'styled-components'
import { SquareProps } from './LegendsTypes.ts'

export const LegendWrapper = styled.div`
    color: white;
    display: flex;
    font-size: 1.2em;
    justify-content: space-between;
    margin: 50px auto;
    max-width: 600px;
    padding: 0 10px;
`

export const SingleLegend = styled.div`
    display: flex;
    align-items: center;
`

export const Square = styled.span<SquareProps>`
    display: inline-block;
    height: 20px;
    margin: 0 10px;
    width: 20px;
    border-radius: 100%;
    background-color: ${(props) => {
        if (props.compare) {
            return '#ffff50'
        } else if (props.swap) {
            return 'red'
        } else if (props.sorted) {
            return '#4bc52e'
        }
    }};
`
