import { FC } from "react";
import building from "../../assets/building.png";
import { v4 as uuidv4 } from "uuid";

const Templates: FC = () => {
  const images = [
    building,
    building,
    building,
    building,
    building,
    building,
    building,
    building,
    building,
  ];

  return (
    <>
      {images.map((item) => {
        return <img src={item} alt="" key={uuidv4()} />;
      })}
    </>
  );
};

export default Templates;
