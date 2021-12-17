
import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Index = ({
  imageUrl,
  x: inputX,
  y: inputY,
  handyScale,
  scale: inputScale,
  isHover,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [image] = useImage(imageUrl);

  if (!image) {
    return (<></>)
  }

  let scale = inputScale || 1;
  const [x, y] = [inputX * scale, inputY * scale];

  if (handyScale) {
    scale *= handyScale;
  }

  return (
    <Image
      {...props}
      image={image}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
      x={x}
      y={y}
      scaleX={(isHover && !disabled) ? scale + 0.03 : scale}
      scaleY={(isHover && !disabled) ? scale + 0.03 : scale}
      //todo: every object is disabled, expect declared ones
      onTap={!disabled
        ? () => onClick()
        : (e) => {
          onMouseEnter(e);
          setTimeout(() => {
            onMouseLeave(e);
          }, [200])
        }}
      onDblTap={onClick}
      onClick={onClick}
    />
  )
}

export default Index;