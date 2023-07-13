import styled from 'styled-components'

export const ChartWrapper = styled.div`
    min-height: 520px;
    min-width: 90%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`

export const SingleBar = styled.div`
    background-color: lightblue;
    color: #282c34;
    display: inline-block;
    font-size: 10px;
    font-weight: bold;
    margin: 0 2px;
    text-align: center;
    transition-duration: 150ms;
    transition-property: height;
    transition-timing-function: ease-in;
`
