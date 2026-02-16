import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Offer = () => {
    const { t } = useLanguage();

    return (
        <Section id="offer" className="bg-gray-900 dark:bg-black text-white text-center">
            <div className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-blue-600/20 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        {t('offer.headline')}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                        {t('offer.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <Button variant="primary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                            {t('offer.cta')}
                        </Button>
                    </div>

                    <p className="mt-6 text-xs sm:text-sm text-gray-400">
                        {t('offer.note')}
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Offer;
