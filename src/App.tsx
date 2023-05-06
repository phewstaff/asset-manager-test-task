import mainImage from "./assets/ai.png";
import { FC, useState } from "react";
import "./App.scss";
import Middle from "./components/middle/Middle";
import Bottom from "./components/bottom/Bottom";
import Top from "./components/top/Top";

const App: FC = () => {
  const images = [
    { src: mainImage, id: 1 },
    { src: mainImage, id: 2 },
    { src: mainImage, id: 3 },
    { src: mainImage, id: 4 },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [middleImages, setMiddleImages] = useState(images);
  const [draggedImageUrl, setDraggedImageUrl] = useState<string | null>(null);
  const imagesLength = middleImages.length;

  return (
    <>
      <div className="app-wrapper">
        <div className="app-container">
          <Top />
          <Middle
            setMiddleImages={setMiddleImages}
            draggedImageUrl={draggedImageUrl}
            setDraggedImageUrl={setDraggedImageUrl}
            currentImage={currentImage}
            currentIndex={currentIndex}
            setCurrentImage={setCurrentImage}
            setCurrentIndex={setCurrentIndex}
            middleImages={middleImages}
          />
          <Bottom
            setDraggedImageUrl={setDraggedImageUrl}
            setMiddleImages={setMiddleImages}
            imagesLength={imagesLength}
          />
        </div>
      </div>
    </>
  );
};

export default App;
