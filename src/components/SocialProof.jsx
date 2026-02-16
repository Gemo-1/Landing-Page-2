import React from 'react';
import Section from './ui/Section';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SocialProof = () => {
    const { t } = useLanguage();
    const testimonials = t('socialProof.testimonials');

    const images = [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80", // Laptop/Coffee
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80", // Coffee/Desk
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"  // Computer setup
    ];

    return (
        <Section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {t('socialProof.headline')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <img
                                    src={images[index]}
                                    alt={testimonial.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div className="min-w-0">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{testimonial.name}</h4>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-3 sm:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 italic flex-grow text-sm sm:text-base">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
