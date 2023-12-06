import '../../styles/index.css'; 
import Values from '../../assets/values.json';
import React from 'react';
import Accordion from '../Accordion';

function ValuesBlock () {
    return (
        <section className="values-galery">
            {Values.map(value => (
                <Accordion key={value.className} title={value.title} description={value.description} />
            ))}
        </section>
    );
};

export default ValuesBlock;

