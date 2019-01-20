import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const MainColor = `#5fd080`;
const SecondColor = `#ee595b`;

export const StyledLink = styled(NavLink)`
    display: block;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: all 300ms ease;
    font-size: 16px;
    font-weight: 400;
    :hover {
        border: 2px solid ${MainColor};
        color: ${MainColor};
    }
    &.active{
    font-weight: 700;
    color: ${SecondColor};
    }
`;

export const StyledInput = styled.input`
    margin: 5px 0;
    width: 100%;
    display: block;  
    box-sizing: border-box;
    padding: 10px 0 10px 7px;
    color: inherit;
    width: 100%;
    font-size: 14px;
    font-weight: inherit;
    line-height: 1.1;
    border: 1px solid ${MainColor};
    border-radius: 6px;
    transition: all 300ms ease;
    &:focus {
        border:none
    }
`;

export const StyledForm = styled.form`    
    display: flex;
    flex-direction: column;
    width: ${props => (props.width ? props.width : '300')}px;
    margin: 70px auto;
    justify-content: space-between;    
`;

export const StyledButton = styled.button`
    display: block;
    text-transform: uppercase;
    padding: 5px 7px;
    background-color: transparent;
    color: ${props => (props.color ? props.color : MainColor)} ;
    border-radius: 6px;
    border: 2px solid ${props => (props.color ? props.color : MainColor)};
    transition: all 300ms ease;
    margin-top: 20px;
    :hover{
        background-color: ${props => (props.color ? props.color : MainColor)};
        color: white;
    }
`;