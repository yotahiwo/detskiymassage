// Cookie Banner
(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'cookieConsent';
    const COOKIE_BANNER_ID = 'cookie-banner';

    function initCookieBanner() {
        // Check if consent already given
        if (localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted') {
            return;
        }

        // Create banner HTML
        const banner = document.createElement('div');
        banner.id = COOKIE_BANNER_ID;
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <p class="cookie-text">Мы используем файлы cookie для улучшения работы сайта. Нажимая "Принять", вы соглашаетесь с их использованием.</p>
                <button class="cookie-accept-btn" aria-label="Принять">Принять</button>
            </div>
        `;

        document.body.appendChild(banner);

        // Show banner with animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 300);

        // Accept button handler
        const acceptBtn = banner.querySelector('.cookie-accept-btn');
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();

