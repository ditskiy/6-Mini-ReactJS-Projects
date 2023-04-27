import React from 'react';

export const Success = ({ onSabmitClick , invaise}) => {
  const count = invaise.length
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={onSabmitClick}  className="send-invite-btn">Назад</button>
    </div>
  );
};
