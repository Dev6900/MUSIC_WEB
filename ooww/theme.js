// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if the theme toggle button exists
if (themeToggleButton) {
    // Check for the stored theme in localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the current theme
    document.body.classList.add(currentTheme);

    // Function to switch themes
    const switchTheme = () => {
        // Determine the new theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Replace the current theme with the new theme
        document.body.classList.replace(currentTheme, newTheme);

        // Update the current theme variable
        currentTheme = newTheme;

        // Store the new theme in localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Add event listener for the theme toggle button
    themeToggleButton.addEventListener('click', switchTheme);
}