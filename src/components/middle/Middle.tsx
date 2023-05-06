import { FC, useRef, useState } from "react";
import back from "../../assets/back-outline.svg";
import forward from "../../assets/forward-outline.svg";
import "./Middle.scss";
import MiddleImage from "./MiddleImage";

type Props = {
  draggedImageUrl: string | null;

  currentIndex: number;
  currentImage: {
    src: string;
    id: number;
  };

  middleImages: {
    src: string;
    id: number;
  }[];

  setDraggedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;

  setMiddleImages: React.Dispatch<
    React.SetStateAction<
      {
        src: string;
        id: number;
      }[]
    >
  >;

  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentImage: React.Dispatch<
    React.SetStateAction<{
      src: string;
      id: number;
    }>
  >;
};

const Middle: FC<Props> = (props) => {
  const itemsRef = useRef<any>();

  const scrollToIndex = (index: number) => {
    props.setCurrentImage(props.middleImages[index]);
    props.setCurrentIndex(index);

    const node = getMap().get(index + 1);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  };

  return (
    <section className="middle">
      <div
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();
          if (props.draggedImageUrl) {
            props.setMiddleImages((prevState) => [
              ...prevState,
              { src: props.draggedImageUrl!, id: prevState.length + 1 },
            ]);
          }
        }}
        className="middle-image-container"
      >
        {props.middleImages.map((item) => {
          return (
            <MiddleImage
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                event.preventDefault();
                props.setMiddleImages((prevState) => [
                  ...prevState,
                  { src: props.draggedImageUrl!, id: prevState.length + 1 },
                ]);
              }}
              setDraggedImageUrl={props.setDraggedImageUrl}
              draggedImageUrl={props.draggedImageUrl}
              setMiddleImages={props.setMiddleImages}
              item={item}
              getMap={getMap}
              key={item.id}
            />
          );
        })}
      </div>

      <div className="swipe-buttons-container">
        <img
          src={back}
          alt=""
          onClick={() => {
            if (props.currentIndex > 0) {
              scrollToIndex(props.currentIndex - 1);
            }
          }}
        />

        <p>страница {props.currentIndex + 1}</p>

        <img
          src={forward}
          alt=""
          onClick={() => {
            if (props.currentIndex < props.middleImages.length - 1) {
              scrollToIndex(props.currentIndex + 1);
            }
          }}
        />
      </div>
    </section>
  );
};

export default Middle;
