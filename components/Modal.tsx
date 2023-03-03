import React from 'react';

const Modal = ({ isOpen, onClose, children }: any) => {
  const handleOverlayClick = (event:any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="closeButton" onClick={onClose}>
              ❌
            </button>
            <div className="content">{children}</div>
          </div>
        </div>
      )}

      <style jsx>
        {
          `
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .modal {
            text-align:center;
            position: relative;
            background-color: white;
            border-radius: 4px;
            padding: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            width: 400px;
            margin:1rem;
          }
          
          .closeButton {
            position: absolute;
            top: 8px;
            right: 8px;
            font-size: 20px;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
          
          .content {
            margin-top: 16px;
            gap:1rem;
          }
          
          `
        }
      </style>
    </>
  );
};

export default Modal;
