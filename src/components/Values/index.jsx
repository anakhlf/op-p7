import '../../styles/index.css'; 
import Values from '../../assets/values.json';
import React from 'react';
import Overflow from '../Overflow';

function ValuesBlock () {
    return (
        <div className="values-galery">
            {Values.map(value => (
                <Overflow key={value.className} title={value.title} description={value.description} />
            ))}
        </div>
    );
};

export default ValuesBlock;

//renommer acordéon 