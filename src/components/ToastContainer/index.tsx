import React from 'react';

import Toast from './Toast';
import { ToastMessages } from '../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessages[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};
