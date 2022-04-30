import './Cards.css';

import TinderCard from 'react-tinder-card';

function Cards({properties, childRefs, swiped, outOfFrame}) {
  return (
    <div className='cards'>
      <div className='cards-container'>
        {properties.map((property, index) => (
          <TinderCard className='tinder-card' key={property.name}
            ref={childRefs[index]}
            onSwipe={(dir) => swiped(dir, property.name, index)}
            onCardLeftScreen={() => outOfFrame(property.name, index)}
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
