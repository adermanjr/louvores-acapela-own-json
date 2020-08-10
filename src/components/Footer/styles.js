import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
`;
/*
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
*/
export const TextoInf = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-style: normal;
  font-size: 10px;
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export const LinkInf = styled.a`
  font-family: 'Press Start 2P', cursive;
  font-style: normal;
  font-size: 12px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const ImgInf = styled.img`
  padding-top: 20px;
  width: 35px;
`;