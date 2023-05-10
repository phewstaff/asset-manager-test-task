import { FC, useState } from "react";
import ai from "../../assets/ai.png";

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

const Gallery: FC<Props> = (props: Props) => {
  const [galleryImages, setGalleryImages] = useState<string[]>([
    ai,
    ai,
    ai,
    ai,
  ]);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result as string;
        setGalleryImages((prevState) => [...prevState, dataUrl]);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      <>
        {galleryImages.map((dataUrl) => (
          <img
            onClick={() =>
              props.setMiddleImages((prevState) => [
                ...prevState,
                {
                  src: dataUrl,
                  id: props.imagesLength + 1,
                },
              ])
            }
            key={dataUrl}
            src={dataUrl}
            alt="uploaded image"
            draggable={true}
            onDragStart={() => {
              props.setDraggedImageUrl(dataUrl);
            }}
          />
        ))}
      </>
    </>
  );
};

export default Gallery;
