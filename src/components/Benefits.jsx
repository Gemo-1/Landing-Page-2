import React from 'react';
import Section from './ui/Section';
import { Smartphone, Zap, TrendingUp, Search, RefreshCw, Award, Layout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
    const { t } = useLanguage();
    const items = t('benefits.items');
    const icons = [Layout, Smartphone, TrendingUp, Search, RefreshCw, Award];

    return (
        <Section id="benefits">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {t('benefits.headline')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                        {t('benefits.subheadline')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {items.map((benefit, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="p-6 sm:p-8 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{benefit.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
