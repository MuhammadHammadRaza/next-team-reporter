"use client";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState } from "react";

const CustomModal = (props) => {
  // const CustomModal = ({ buttonClass, buttonText }) => {
  //   const [openModal, setOpenModal] = useState();
  //   const props = { openModal, setOpenModal, buttonClass, buttonText };
  const handleCloseModal = () => {
    props.setCurrentUser(undefined);
    props.setOpenModal(undefined);
  };

  return (
    <>
      {/* <p
        className={props.buttonClass}
        onClick={() => props.setOpenModal("pop-up")}
      >
        {props.buttonText}
      </p> */}
      <Modal
        dismissible={true}
        show={props.openModal !== undefined}
        size="md"
        popup
        onClose={handleCloseModal}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {props.openModal === "add"
                ? "Are you sure you want to add this user?"
                : "Are you sure you want to delete this user?"}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color={props.openModal === "add" ? "success" : "failure"}
                onClick={
                  props.openModal === "add"
                    ? props.handleOnAdd
                    : props.handleOnRemove
                }
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={handleCloseModal}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
