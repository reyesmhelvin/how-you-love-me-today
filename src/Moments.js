import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import eoe81ux2duw_clem_onojeghuo from '../public/assets/dummy/eoe81ux2duw-clem-onojeghuo.jpg';
import acwkil8e2ba_ben_white from '../public/assets/dummy/acwkil8e2ba-ben-white.jpg';
import jw1jhbemizc_photo_nic_co_uk_nic from '../public/assets/dummy/jw1jhbemizc-photo-nic-co-uk-nic.jpg';
import b5dvtpt59f4_charlie_hang from '../public/assets/dummy/b5dvtpt59f4-charlie-hang.jpg';
import uf8vqcbq_re_allef_vinicius from '../public/assets/dummy/uf8vqcbq-re-allef-vinicius.jpg';
import _fk7qzkage0_scott_webb from '../public/assets/dummy/_fk7qzkage0-scott-webb.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {

  },
};

const tilesData = [
  {
    img: eoe81ux2duw_clem_onojeghuo,
    title: 'January 1, 2017',
    author: 'jill111',
    featured: true,
  },
  {
    img: acwkil8e2ba_ben_white,
    title: 'January 2, 2017',
    author: 'pashminu',
  },
  {
    img: jw1jhbemizc_photo_nic_co_uk_nic,
    title: 'January 3, 2017',
    author: 'Danson67',
  },
  {
    img: b5dvtpt59f4_charlie_hang,
    title: 'January 4, 2017',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: uf8vqcbq_re_allef_vinicius,
    title: 'January 5, 2017',
    author: 'Hans',
  },
  {
    img: _fk7qzkage0_scott_webb,
    title: 'January 6, 2017',
    author: 'fancycravel',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={500}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;