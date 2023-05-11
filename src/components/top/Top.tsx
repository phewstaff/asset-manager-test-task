import { FC, useState } from "react";
import book from "../../assets/book-outline.svg";
import "./Top.scss";
import Modal from "./Modal";

const Top: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="top">
      <div className="top-up">
        <article>
          <h2>Мой проект</h2>
          <p>Размер 400х280 мм(в развороте) </p>
        </article>

        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          В корзину
        </button>

        <div className="dots-icon">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="top-down">
        <img src={book} alt="" />
      </div>

      {showModal && <Modal onClose={closeModal} />}
    </section>
  );
};

export default Top;
