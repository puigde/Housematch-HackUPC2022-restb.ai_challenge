import {useState} from 'react';
import './Cards.css';

import TinderCard from 'react-tinder-card';

function Cards() {
  const [properties, setProperties] = useState([
    {
      name: 'Pedralbes house',
      imgurl: 'https://img3.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/17/5d/46/974096135.jpg',
    },
    {
      name: 'Calle d\'Europa, 15 flat',
      imgurl: 'https://img3.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/2c/16/61/878498755.jpg',
    },
  ]);

  return (
    <div className='cards'>
      <div className='cards-container'>
        {properties.map((property) => (
          <TinderCard className='tinder-card' key={property.name}
            swipeThreshold={200}
            preventSwipe={['up', 'down']}>
            <div className='card' style={{backgroundImage: `url(${property.imgurl})`}}>
              <h2>{property.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
