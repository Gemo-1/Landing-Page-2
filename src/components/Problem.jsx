import React from 'react';
import Section from './ui/Section';
import { AlertTriangle, Clock, Frown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Problem = () => {
    const { t } = useLanguage();
    const cards = t('problem.cards');

    const icons = [Clock, Frown, AlertTriangle];
    const colors = [
        { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400' },
        { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
        { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400' }
    ];

    return (
        <Section className="bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        {t('problem.headline')}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t('problem.subheadline')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    {cards.map((card, index) => {
                        const Icon = icons[index];
                        const color = colors[index];
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${color.bg} ${color.text} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                                    <Icon size={24} className="sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{card.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{card.text}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {t('problem.conclusion')}
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Problem;
