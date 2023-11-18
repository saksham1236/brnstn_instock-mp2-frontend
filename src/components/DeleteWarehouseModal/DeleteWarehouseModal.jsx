import React from "react";
import "./DeleteWarehouseModal.scss";
import closeImg from "../../assets/Icons/close-24px.svg";

const DeleteWarehouseModal = ({
  selectedWarehouse,
  setShowModal,
  setSelectedWarehouse,
}) => {
  const handleClose = () => {
    console.log("close modal");
    setSelectedWarehouse(null);
    setShowModal(false);
  };

  const handleDelete = () => {
    console.log("delete selected warehouse: ", selectedWarehouse);
    setShowModal(false);
    setSelectedWarehouse(null);
  };

  return (
    <div className="delete-warehouse-modal__overlay">
      <div className="delete-warehouse-modal__container">
        <div className="delete-warehouse-modal__close">
          <img src={closeImg} alt="close icon" onClick={handleClose} />
        </div>
        <div className="delete-warehouse-modal__title">
          <h1>Delete {selectedWarehouse} warehouse? </h1>
        </div>
        <div className="delete-warehouse-modal__text">
          <p>
            Please confirm that you'd like to delete {selectedWarehouse} from
            the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete-warehouse-modal__buttons">
          <button
            className="delete-warehouse-modal__cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="delete-warehouse-modal__delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarehouseModal;
