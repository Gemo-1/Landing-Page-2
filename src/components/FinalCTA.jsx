import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const FinalCTA = () => {
    const { t } = useLanguage();

    return (
        <Section className="py-16 sm:py-24 md:py-32 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                    {t('finalCta.headline')}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                    {t('finalCta.subheadline')}
                </p>
                <Button className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    {t('finalCta.cta')}
                </Button>
            </div>
        </Section>
    );
};

export default FinalCTA;
