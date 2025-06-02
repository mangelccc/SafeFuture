// ScrollToTopButton.jsx
import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroller.scrollTo('topScrollAnchor', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 border-black dark:border-white dark:border-2 bg-black2 dark:bg-whiteOp bg-opacity-80 text-gold p-4 rounded-xl shadow-lg hover:bg-opacity-90 transition-all z-60"
            aria-label="Volver arriba"
        >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
    );
};

export default ScrollToTopButton;
