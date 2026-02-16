import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MessageSquare, Layout, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
    const { t } = useLanguage();
    const steps = t('howItWorks.steps');
    const icons = [MessageSquare, Layout, Rocket];

    return (
        <Section id="how-it-works" className="bg-gray-900 dark:bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('howItWorks.headline')}</h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">{t('howItWorks.subheadline')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700/50 -z-10"></div>

                    {steps.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-full flex items-center justify-center mb-6 sm:mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                                    <div className="text-blue-500 group-hover:text-blue-400 transition-colors">
                                        <Icon size={28} className="sm:w-8 sm:h-8" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs sm:text-sm font-bold border-4 border-gray-900 dark:border-black">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <Button variant="primary" className="!bg-white !text-gray-900 hover:!bg-gray-100">
                        {t('howItWorks.cta')}
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
