import React from 'react';
import { useEffect, useState } from 'react';
import {
  LogoutBtn,
  LogoutBtnText,
  LogoutIconStyled,
  Modal,
} from './Logout.styled';
import { ModalLogout } from './ModalLogout/ModalLogout';

export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <LogoutBtn onClick={toggleModal} aria-label="open log out window">
        <LogoutIconStyled className="logout_icon" />
        <LogoutBtnText>Log Out</LogoutBtnText>
      </LogoutBtn>

      {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalLogout onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )}
    </>
  );
};
