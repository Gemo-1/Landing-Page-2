import React, { useState } from 'react';
import Section from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
            <button
                className="w-full py-4 sm:py-6 flex items-center justify-between text-left focus:outline-none gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex-grow text-left">{question}</span>
                <span className="ml-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4 sm:mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();
    const faqs = t('faq.items');

    return (
        <Section id="faq" className="bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {t('faq.headline')}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
