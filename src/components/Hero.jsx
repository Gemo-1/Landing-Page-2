import React from 'react';
import Button from './ui/Button';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const points = t('hero.points');

    return (
        <section className="relative pt-20 sm:pt-28 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-24 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[1000px] h-[300px] sm:h-[400px] md:h-[600px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply dark:mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in-up">
                        <Zap size={14} className="sm:w-4 sm:h-4 fill-blue-700 dark:fill-blue-300" />
                        <span>{t('hero.badge')}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        {t('hero.headline')} <span style={{ lineHeight: '1.5' }} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{t('hero.headlineHighlight')}</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('hero.subheadline')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <Button className="w-full sm:w-auto group">
                            {t('hero.ctaPrimary')}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto">
                            {t('hero.ctaSecondary')}
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="line-clamp-1">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
