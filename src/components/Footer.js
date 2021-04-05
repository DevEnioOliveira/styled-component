import React from 'react';
import styled from 'styled-components';


const Footer = styled.footer `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #447389;
`

const FooterItem =  styled.a `
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    font-weigth: bold;
    display: flex;
    padding: 40px
`

export default function footer() {
  return (
      <React.Fragment>
          <Footer>
              <FooterItem>Aula sobre styled components</FooterItem>
              <FooterItem>Marque já</FooterItem>
          </Footer>
      </React.Fragment>
  );
}

