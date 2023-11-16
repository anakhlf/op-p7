import React, { useState } from 'react';
import '../../styles/index.css'; 
import Arrow from '../../assets/images/icons/arrow_back.png';


function Accordion({title, description, equipments}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className='block-text-accordion'>
            <div className='top-bar' onClick={toggleDescription}>
                <p className='value-title'>{title}</p>
                {<img src={Arrow} className={`arrow ${isOpen ? 'up' : 'down'}`} alt='arrow'></img>}
            </div>
            <div className={`text-accordion ${isOpen ? 'open' : ''}`}>
                {description} 
                {equipments && Array.isArray(equipments) && (
                        <ul>
                            {equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>
    )
}

export default Accordion;