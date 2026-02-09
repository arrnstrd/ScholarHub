(function () {
    const THEME_KEY = 'scholarhub-theme';
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    function getPreferredTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
        }
        updateToggle(theme);
    }

    function updateToggle(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        const label = themeToggle.querySelector('span');
        if (theme === 'dark') {
            if (icon) icon.className = 'fas fa-sun';
            if (label) label.textContent = 'Light';
        } else {
            if (icon) icon.className = 'fas fa-moon';
            if (label) label.textContent = 'Dark';
        }
    }

    function toggleTheme() {
        const isDark = body.classList.contains('theme-dark');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
    }

    function toggleSidebar() {
        if (!sidebar) return;
        sidebar.classList.toggle('collapsed');
    }

    const initial = getPreferredTheme();
    applyTheme(initial);

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
})();
