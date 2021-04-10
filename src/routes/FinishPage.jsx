import React from 'react';
import Typography from '@material-ui/core/Typography';
import friendsSrc from '../assets/imgs/friends.png';

export function FinishPage() {
  return (
      <div>
          <Typography>
              Отличный результат! <br />
              Спасибо за участие.
          </Typography>
          <img src={friendsSrc} alt="Спанч Боб и его друщья" height={587} width={794} />
      </div>
  );
}
