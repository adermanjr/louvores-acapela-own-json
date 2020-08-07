/* eslint-disable no-console */
import React, { useState } from 'react';
import Menu from '../../components/Menu';
import db from '../../data/db.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

/*
    package.json:
      * vercel -> roda scprit build
      * heroku -> roda scprit server
*/
function Home() {
  
  const [videoBanner, setVideoBanner] = useState(db.categorias[0].videos[7]);
  const [autoPlay, setAutoPlay] = useState('0');

  async function handleChangeBanner(videoId, categId) {
    
    await setVideoBanner(db.categorias[categId].videos[videoId]);
    setAutoPlay('1');

  }

  return (
    <PageDefault paddingAll={0}>
      <Menu />
        <>
          <BannerMain
            videoTitle={videoBanner.titulo}
            url={videoBanner.url}
            videoDescription={videoBanner.letra}
            autoPlay={autoPlay}
          />
          {/* ignoreFirstVideo */}
          <Carousel
            category={db.categorias[0]}
            onClick={handleChangeBanner}
          />

          <Carousel
            category={db.categorias[1]}
            onClick={handleChangeBanner}
          />
        </>
      )

      {/*
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      */}
    </PageDefault>
  );
}

export default Home;
