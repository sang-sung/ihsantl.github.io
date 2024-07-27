import { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Modal({
  children,
  stateModal,
  setStateModal,
  showClose = true,
  closeOutArea = true,
}) {
  const toggleModal = () => {
    setStateModal(!stateModal);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setStateModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setStateModal]);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-screen min-h-[100svh] h-full bg-black/30 flex justify-center items-center 
        transition-opacity duration-200 ${
          stateModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`relative z-50 flex justify-center p-5
        w-4/5 min-h-[20svh] max-h-[95svh] bg-white rounded-2xl`}
      >
        <div className="flex-grow max-h-[95svh] overflow-auto">{children}</div>
        {showClose && (
          <div className="absolute top-2 right-2 rounded-full p-1 bg-white">
            <div
              className="flex items-center justify-center overflow-hidden text-sm bg-gray-300 rounded-full w-7 h-7 cursor-pointer"
              onClick={toggleModal}
            >
              {/* x */}
              <FontAwesomeIcon icon={faXmark} className="text-white" />
            </div>
          </div>
        )}
      </div>
      <div
        className="absolute w-full h-full"
        onClick={() => (closeOutArea ? setStateModal(false) : null)}
      ></div>
    </div>
  );
}
