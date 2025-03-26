const surpriseMeButton = document.getElementById('surprise-me');
const musicList = document.getElementById('music-list');

const surprises = [
    "Check out our curated mix of the week!",
    "Did you know? The longest song ever recorded is 'The Devil's Note' by John Cage, lasting 4 hours and 33 minutes.",
    "Explore hidden gems in our collection of indie artists!",
    "Discover the story behind your favorite track in our song details section."
    
];

surpriseMeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const surpriseMessage = surprises[randomIndex];
    musicList.innerHTML = `<p>${surpriseMessage}</p>`;
});

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    document.body.classList.replace(currentTheme, newTheme);
    localStorage.setItem('theme', newTheme);
});