import './Cards.css';

import TinderCard from 'react-tinder-card';
import Photos from './Photos.js';

function Cards({properties, childRefs, swiped, outOfFrame}) {
  if (properties) {
    return (
      <div className='cards'>
        <div className='cards-container'>
          {properties.map((property, index) => (
            <TinderCard className='tinder-card' key={index}
              ref={childRefs[index]}
              onSwipe={(dir) => swiped(dir, property.name, index)}
              onCardLeftScreen={() => outOfFrame(property.name, index)}
              swipeThreshold={200}
              preventSwipe={['up', 'down']}>
              <Photos name={property.name} imgs={property.imgs} />
            </TinderCard>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>Loading...</>
    );
  }
}

export default Cards;
