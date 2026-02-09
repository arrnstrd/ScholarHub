(function () {
    const STORAGE_KEY = 'scholarhub-theme';
    const body = document.body;
    const toggle = document.querySelector('.theme-toggle');

    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('theme-light');
        } else {
            body.classList.remove('theme-light');
        }
        updateToggle(theme);
    }

    function updateToggle(theme) {
        if (!toggle) return;
        const icon = toggle.querySelector('i');
        const label = toggle.querySelector('span');
        if (theme === 'light') {
            if (icon) icon.className = 'fas fa-moon';
            if (label) label.textContent = 'Dark';
        } else {
            if (icon) icon.className = 'fas fa-sun';
            if (label) label.textContent = 'Light';
        }
    }

    function getInitialTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
        return 'dark';
    }

    function toggleTheme() {
        const isLight = body.classList.contains('theme-light');
        const next = isLight ? 'dark' : 'light';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }

    const initial = getInitialTheme();
    applyTheme(initial);

    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
})();
