import React, { FC } from "react";
import dog from "../../assets/Hotpot.png";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const Background: FC = (props: Props) => {
  const images = [dog, dog, dog, dog, dog, dog];

  return (
    <>
      {images.map((item) => {
        return <img src={item} alt="" key={uuidv4()} />;
      })}
    </>
  );
};

export default Background;
