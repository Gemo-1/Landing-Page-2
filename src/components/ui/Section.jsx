import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden ${className}`}>
            {children}
        </section>
    );
};

export default Section;
