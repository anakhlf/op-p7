import React from 'react';
import '../../styles/index.css'; 
import Overflow from '../Overflow';
import Ratings from '../Ratings/'

function LogDescription({listing}) {
    return  (
        <section className='section__log-description'>
          <div className='div__title-place'>
            <h2 className='log-title'>{listing.title}</h2>
            <p className='log-place'>{listing.location}</p>
          </div>
          <div className='div__host'>
          <p className='log-host'>{listing.host.name.split(' ')[0]}<br />{listing.host.name.split(' ')[1]}</p>
            <img src={listing.host.picture} alt={`Hôte : ${listing.host.name}`} className='picture-host' />
          </div>
          <div className='log-tags'>
            {listing.tags.map(tag => <span className='span__tag' key={tag}>{tag}</span>)}
          </div>
          <div className='div__log-rating'>
            <Ratings rating={Number(listing.rating)} />
          </div>
          <div className='log-equipments'>
            <Overflow title="Équipements" content={listing.equipments.join(', ')} />
          </div>
          <div className='log-description'>
            <Overflow title="Description" content={listing.description} />
          </div>
        </section>
    )
}

export default LogDescription;