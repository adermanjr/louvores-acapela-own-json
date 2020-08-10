/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import db from '../../data/db.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

/*
    package.json:
      * vercel -> roda scprit build
      * heroku -> roda scprit server
*/
function Home() {

  const [videoBanner, setVideoBanner] = useState(db.categorias[0].videos[7]);
  const [autoPlay, setAutoPlay] = useState('0');
  const [searchItem, setSearchItem] = useState('');
  const [videos, setVideos] = useState([]);

  async function handleChangeBanner(videoId, categId) {
    setVideoBanner(db.categorias[categId].videos[videoId]);
    setAutoPlay('1');
  }

  async function handleChangeSearch(infoEvent) {
      const { target } = infoEvent;
      videos.forEach((video) =>{
        if (video.titulo === target.value) {
          handleChangeBanner(video.id, video.categoriaId);
        }
      })
      setSearchItem(target.value);
  }

  useEffect(() => {
    let list = db.categorias[0].videos;
    let listAll = list
                  .concat(db.categorias[1].videos)
                  .sort((a, b) => {
      if (a.titulo < b.titulo) { return -1; }
      if (a.titulo > b.titulo) { return 1; }
      return 0;
    });
    
    setVideos(listAll);
    
  }, []);

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
        <FormField
          label="Cânticos"
          type="text"
          name="searchId"
          value={searchItem}
          onChange={handleChangeSearch}
          suggestions={videos}
        />
        {/* ignoreFirstVideo */}
        <Carousel
          category={db.categorias[2]}
          onClick={handleChangeBanner}
        />

        <Carousel
          category={db.categorias[1]}
          onClick={handleChangeBanner}
        />

        <Carousel
          category={db.categorias[0]}
          onClick={handleChangeBanner}
        />
      </>

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
