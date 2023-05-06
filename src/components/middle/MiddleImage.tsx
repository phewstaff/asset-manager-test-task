import { FC, useState } from "react";

type Props = {
  setMiddleImages: React.Dispatch<
    React.SetStateAction<
      {
        src: string;
        id: number;
      }[]
    >
  >;

  onDragOver: (event: React.DragEvent<HTMLImageElement>) => void;
  onDrop: (event: React.DragEvent<HTMLImageElement>) => void;

  setDraggedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;

  draggedImageUrl: string | null;

  item: {
    src: string;
    id: number;
  };

  getMap: () => any;
};

const MiddleImage: FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={props.item.src} alt="" />
        </div>
      )}
      <img
        key={props.item.id}
        src={props.item.src}
        alt=""
        onClick={handleClick}
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}
        ref={(node) => props.getMap().set(props.item.id, node)}
      />
    </>
  );
};

export default MiddleImage;
