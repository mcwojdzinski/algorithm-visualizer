import styled from 'styled-components'
import { ButtonTypeProps } from './ControlsTypes.ts'

export const ControlsWrapper = styled.div`
    padding: 10px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    background-color: #f4f4f4;
    box-shadow: 0px 2px 7px black;

    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    min-height: 100px;
    height: auto;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const ControlsSliders = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (min-width: 1024px) {
        width: 30%;
        justify-content: space-around;
    }
`

export const ControlsGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const Button = styled.button<ButtonTypeProps>`
    background-color: ${(props) => (props.warning ? '#d0312d' : '#008dba')};
    border-radius: 5px;
    border: none;
    color: #f1f1f1;
    font-size: 1em;
    font-weight: bold;
    min-width: 110px;
    margin: 0 10px;
    outline: none;
    padding: 13px 10px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? 'none' : null)};

    @media (min-width: 768px) {
        min-width: 130px;
    }
`

export const Select = styled.select`
    background: #008dba;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    padding: 13px 10px;
    min-width: 130px;
`

export const Label = styled.label`
    color: black;
    display: block;
    text-align: center;
    font-size: 20px;
`

export const Input = styled.input`
    min-width: 130px;
`
