import styled from 'styled-components'

export const ControlsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    background-color: #f4f4f4;
    box-shadow: 0px 2px 7px black;
    display: flex;
    justify-content: space-around;
    min-height: 100px;
    padding: 0 20px;
`

export const ControlsGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const Button = styled.button`
    background-color: #008dba;
    border-radius: 5px;
    border: none;
    color: #f1f1f1;
    font-size: 1em;
    font-weight: bold;
    margin: 0 10px;
    outline: none;
    padding: 13px 10px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`

export const Select = styled.select`
    background: #008dba;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    padding: 13px 10px;
`

export const Label = styled.label`
    color: black;
    display: block;
    text-align: center;
    font-size: 20px;
`
