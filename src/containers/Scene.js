import React from 'react';
import { Layer, Stage } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import URLImage from '../components/Konva/URLImage';
import Layout from './Layout';
import ObjectImage from './Object';

const Index = ({
  backgroundImageLink = '/Room0/background.png',
  objects,
}) => {
  const history = useHistory();
  const height = window.innerHeight;

  const [backgroundImage] = useImage(process.env.PUBLIC_URL + backgroundImageLink);
  const scaleY = height / backgroundImage?.height;

  const backgroundObject = objects.filter((object) => !object.id.endsWith('toolbar'));
  const toolbarObjects = objects.filter((object) => object.id.endsWith('toolbar'));

  return (
    <Layout backgroundImage={backgroundImageLink}>
      <Stage
        width={Math.min(backgroundImage?.width * scaleY, window.innerWidth)}
        height={height}>
        <Layer
          id='background'
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < backgroundImage?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - backgroundImage?.width * scaleY)
                pos.x = window.innerWidth - backgroundImage?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + backgroundImageLink}
          />
          {backgroundObject.map((object) =>
            <ObjectImage key={object.id} scale={scaleY} {...object} />)
          }
        </Layer>
        <Layer id='toolbar' width={window.innerWidth} height={height} >
          {toolbarObjects.map((object) =>
            <ObjectImage key={object.id} scale={scaleY} {...object} />)
          }
        </Layer>
      </Stage>
    </Layout>
  );
};

export default Index;
