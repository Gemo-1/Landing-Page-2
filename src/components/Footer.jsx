import React from 'react';
import { Rocket, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const links = t('footer.links');

    return (
        <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 border-t border-gray-800 dark:border-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="sm:col-span-1">
                        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white mb-4">
                            <Rocket size={20} className="sm:w-6 sm:h-6 text-blue-500" />
                            <span className="truncate">Gemo in 48H</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm sm:text-base">{t('footer.company')}</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.about}</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.process}</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.pricing}</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.contact}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm sm:text-base">{t('footer.legal')}</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.privacy}</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">{links.terms}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm sm:text-base">{t('footer.connect')}</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={18} className="sm:w-5 sm:h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
                    <p>&copy; {new Date().getFullYear()} Gemo in 48H. {t('footer.rights')}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <p>{t('footer.location')}</p>
                        <p className="hidden sm:inline">{t('footer.credit')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
