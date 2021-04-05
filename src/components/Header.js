import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
    background-color: #458754;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
`

const Item = styled.a`
    font-size: 18px;
    font-family: 'Read';
    font-weight: bold;
    padding: 10px;
    color: #eee;   
    box-sizing:border-box;
`

export default function header() {
    return(
       <Header> 
           <Item>Home</Item>
           <Item>Sobre</Item>
           <Item>Contato</Item>          
       </Header>
    );
}