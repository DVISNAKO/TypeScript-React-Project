import React, { useState } from 'react';
import '../cards/Card.css'
import { ICard } from '../../models';

interface CardProps {
    cards: ICard[]
}

const CardsList: React.FC<CardProps> = ({cards})  => {

    const [details, setDetails] = useState(false)

    const classText = details ? '' : 'text';
    const addClass = [classText]

    return (
         <div className='wrap'>

      {cards.map((card) => (
        <div className='body' key={card.id}>
          <div >
            <h2 className={addClass.join(' ')}>{card.title}</h2>
            {details && <p>{card.desc}</p>}
          </div>
          <button 
          className={`${details ? 'blue' : 'red'}`}
          onClick={() => setDetails(prev => !prev)}>{details ? 'Show' : 'Hidden'}</button>
        </div>
      ))}
    </div>
    );
};

export default CardsList;