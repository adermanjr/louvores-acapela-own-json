import React from 'react';
import { FooterBase, LinkInf, ImgInf } from './styles'; // TextoInf
import gitLogo from '../../assets/img/ico-github-pb.png';

function Footer() {
  return (
    <FooterBase>
      {/*
      <a href="https://www.harmonico.org/" target="_blank" rel="noopener noreferrer">
        <h2>harmonico.org</h2>
      </a>
      <TextoInf>
        Orgulhosamente criado durante a
        {' '}
        <LinkInf href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
          Imersão React da Alura
        </LinkInf>
      </TextoInf>
      
      */}
      

      <LinkInf href="https://harmonico.org/" target="_blank" rel="noopener noreferrer">
        harmonico.org
      </LinkInf>
      <br />
      <LinkInf href="https://github.com/adermanjr/louvores-acapela-own-json" target="_blank" rel="noopener noreferrer">
        <ImgInf src={gitLogo} alt="Louvores Acapela em Português" />
      </LinkInf>
      
    </FooterBase>
  );
}

export default Footer;
