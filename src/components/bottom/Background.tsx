import { FC } from "react";
import dog from "../../assets/Hotpot.png";
import { v4 as uuidv4 } from "uuid";

type Props = {
  imagesLength: number;
  setDraggedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setMiddleImages: React.Dispatch<
    React.SetStateAction<
      {
        src: string;
        id: number;
      }[]
    >
  >;
};

const Background: FC<Props> = (props) => {
  const images = [dog, dog, dog, dog, dog, dog];

  return (
    <>
      {images.map((item) => {
        return (
          <img
            src={item}
            alt=""
            key={uuidv4()}
            onClick={() =>
              props.setMiddleImages((prevState) => [
                ...prevState,
                {
                  src: item,
                  id: props.imagesLength + 1,
                },
              ])
            }
            draggable={true}
            onDragStart={() => {
              props.setDraggedImageUrl(item);
            }}
          />
        );
      })}
    </>
  );
};

export default Background;
