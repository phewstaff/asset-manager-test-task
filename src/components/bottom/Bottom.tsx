import React, { FC, useState } from "react";
import Gallery from "./Gallery";
import Templates from "./Templates";
import Background from "./Background";
import "./Bottom.scss";

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

const Bottom: FC<Props> = (props: Props) => {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [templatesOpen, setTemplatesOpen] = useState<boolean>(false);
  const [backgroundOpen, setBackgroundOpen] = useState<boolean>(false);
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const handleOnFocus = (
    gallery: boolean,
    templates: boolean,
    background: boolean
  ): React.FocusEventHandler<HTMLButtonElement> | undefined => {
    setGalleryOpen(gallery);
    setTemplatesOpen(templates);
    setBackgroundOpen(background);
    return;
  };

  const toggleExtend = () => {
    setIsExtended((prev) => !prev);
  };

  return (
    <>
      <section className={`bottom ${isExtended ? "extended" : ""}`}>
        <div className="nav-section">
          <button onClick={() => handleOnFocus(true, false, false)}>
            Галерея
          </button>

          <button onClick={() => handleOnFocus(false, true, false)}>
            Шаблоны
          </button>

          <button onClick={() => handleOnFocus(false, false, true)}>Фон</button>
        </div>

        <div className="functional-buttons-container">
          <button onClick={() => props.setMiddleImages([])}>Delete</button>

          <button>Select</button>

          <button className="extend" onClick={toggleExtend}>
            {isExtended ? "Collapse" : "Extend"}
          </button>
        </div>

        <div className="bottom-images-container">
          {galleryOpen ? (
            <Gallery
              setDraggedImageUrl={props.setDraggedImageUrl}
              imagesLength={props.imagesLength}
              setMiddleImages={props.setMiddleImages}
            />
          ) : templatesOpen ? (
            <Templates
              setDraggedImageUrl={props.setDraggedImageUrl}
              imagesLength={props.imagesLength}
              setMiddleImages={props.setMiddleImages}
            />
          ) : backgroundOpen ? (
            <Background
              setDraggedImageUrl={props.setDraggedImageUrl}
              imagesLength={props.imagesLength}
              setMiddleImages={props.setMiddleImages}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default Bottom;
