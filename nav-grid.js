const body = document.body;
const toggleButton = document.querySelector('[data-theme-toggle]');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const getStoredTheme = () => localStorage.getItem('preferredTheme');

const resolveTheme = () => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return mediaQuery.matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
    const useDark = theme === 'dark';
    body.classList.toggle('dark', useDark);
    toggleButton.setAttribute('aria-pressed', String(useDark));
    toggleButton.textContent = useDark ? 'Switch to Light' : 'Switch to Dark';
};

const setTheme = (theme) => {
    localStorage.setItem('preferredTheme', theme);
    applyTheme(theme);
};

applyTheme(resolveTheme());

toggleButton.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(nextTheme);
});

mediaQuery.addEventListener('change', (event) => {
    const stored = getStoredTheme();
    if (stored) return;
    applyTheme(event.matches ? 'dark' : 'light');
});
