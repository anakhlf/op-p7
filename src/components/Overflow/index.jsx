import React, { useState } from 'react';
import '../../styles/index.css'; 
import Arrow from '../../assets/images/icons/arrow_back.png';
import Values from '../../assets/values.json';

function Overflow({title, description,}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className='block-textoverflow'>
            <div className='top-bar' onClick={toggleDescription}>
                <p className='value-title'>{title}</p>
                {<img src={Arrow} className={`arrow ${isOpen ? 'up' : 'down'}`} alt='arrow'></img>}
            </div>
            {isOpen && <div className={`text-overflow ${isOpen ? 'open' : ''}`}>{description}</div>}
        </div>
    )
}

export default Overflow;