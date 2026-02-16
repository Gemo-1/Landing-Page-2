import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Solution = () => {
    const { t } = useLanguage();
    const points = t('solution.points');

    return (
        <Section>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Website building process"
                            className="w-full rounded-2xl shadow-2xl relative z-10"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-2xl -z-10"></div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                            {t('solution.headline')}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            {t('solution.description')}
                        </p>

                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-lg mb-6 sm:mb-8">
                            <p className="font-semibold text-xs sm:text-sm md:text-base text-indigo-900 dark:text-indigo-200 text-center">{t('solution.highlight')}</p>
                        </div>

                        <div className="flex justify-center md:justify-start w-full">
                            <Button className="w-full md:w-auto">{t('solution.cta')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Solution;
