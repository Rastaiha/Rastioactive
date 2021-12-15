
import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Index = ({
  imageUrl,
  x, y,
  scale,
  rotation,
  isHover,
  disabled,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}) => {
  const [image] = useImage(imageUrl);

  if (!image) {
    return (<></>)
  }

  return (
    <Image
      id="salam!"
      image={image}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
      {...props}
      x={x * scale}
      y={y * scale}
      opacity={1}
      rotation={rotation}
      shadowColor="black"
      shadowBlur={10}
      shadowOpacity={0.6}
      shadowOffsetX={(isHover && !disabled) ? 10 : 5}
      shadowOffsetY={(isHover && !disabled) ? 10 : 5}
      scaleX={(isHover && !disabled) ? scale + 0.03 : scale}
      scaleY={(isHover && !disabled) ? scale + 0.03 : scale}

      onTap={(e) => {
        onMouseEnter(e);
        setTimeout(() => {
          onMouseLeave(e);
        }, [200])
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

      onDblTap={onClick}
      onClick={onClick}
    />
  )
}

export default Index;