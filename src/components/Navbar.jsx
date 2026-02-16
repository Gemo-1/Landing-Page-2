import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X, Rocket, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { toggleLanguage, t, language, direction } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.howItWorks'), href: '#how-it-works' },
        { name: t('nav.benefits'), href: '#benefits' },
        { name: t('nav.pricing'), href: '#offer' },
        { name: t('nav.faq'), href: '#faq' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/90 backdrop-blur-md shadow-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
            }`} dir={direction}>
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2 font-bold text-base sm:text-lg md:text-2xl text-gray-900 dark:text-white">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <Rocket size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                    </div>
                    <span className="truncate">Gemo in 48H</span>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-2 border-l border-r border-gray-200 dark:border-gray-700 px-4 mx-2">
                        <button
                            onClick={toggleLanguage}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors w-8"
                        >
                            {language === 'en' ? 'AR' : 'EN'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-1 transform active:scale-95"
                            aria-label="Toggle Dark Mode"
                        >
                            <div className="transition-transform duration-500 rotate-0 hover:rotate-180">
                                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                            </div>
                        </button>
                    </div>
                    <Button variant="primary" className="!px-6 !py-2.5">{t('nav.getStarted')}</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2 sm:gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform active:scale-95 p-1"
                    >
                        <div className="transition-transform duration-500 rotate-0 hover:rotate-180">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </div>
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-sm sm:text-base transition-colors"
                    >
                        {language === 'en' ? 'AR' : 'EN'}
                    </button>
                    <button
                        className="text-gray-600 dark:text-gray-300 p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/20 dark:bg-black/40 md:hidden z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        {/* Menu */}
                        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black shadow-xl md:hidden flex flex-col gap-2 border-t border-gray-100 dark:border-gray-800 z-50">
                            <div className="p-4 sm:p-6 space-y-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="block text-gray-600 dark:text-gray-300 font-medium py-2.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button className="w-full justify-center mt-2">{t('nav.getStarted')}</Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
