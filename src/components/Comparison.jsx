import React from 'react';
import Section from './ui/Section';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Comparison = () => {
    const { t } = useLanguage();
    const agency = t('comparison.agency');
    const service = t('comparison.service');

    return (
        <Section>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {t('comparison.headline')}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Traditional Agency */}
                    <div className="p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 text-center opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6">{agency.title}</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {agency.items.map((item, index) => (
                                <li key={index} className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    <X className="text-red-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Service */}
                    <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 text-center relative shadow-xl transform md:scale-105">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide">
                            {service.badge}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6">{service.title}</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {service.items.map((item, index) => (
                                <li key={index} className="flex items-center justify-center gap-2 sm:gap-3 font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                                    <Check className="text-green-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={18} strokeWidth={3} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Comparison;
