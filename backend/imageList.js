import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '10px 0',
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'WechatIMG10.png',
        title: 'WechatIMG10',
    },
    {
        img: 'WechatIMG10.png',
        title: 'WechatIMG1',
    },
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <IconButton><StarBorder color="white" /></IconButton>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>图片列表</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
            <img src={tile.img} alt={tile.title} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
