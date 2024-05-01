import Overlay from "./Overlay";

export default function ImageModal({ img, isActive, handleClick }) {
  return (
    <>
      {isActive && (
        <>
          <Overlay />
          <div
            className="image-modal"
            onClick={() => {
              handleClick();
            }}
          >
            <img src={img}></img>
          </div>
        </>
      )}
    </>
  );
}
