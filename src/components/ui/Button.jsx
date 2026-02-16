import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
        outline: "border-2 border-white/20 text-white hover:bg-white/10",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
