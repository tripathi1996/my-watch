const title = document.getElementById('title');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const showTime = () => {
    const time = new Date();

    const month = time.getMonth();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    title.innerHTML = `${hours}:${minutes}:${seconds} - ${months[month]}`;
};

let timer = setInterval(() => {
    showTime();
}, 1000);

title.addEventListener('mouseenter', () => {
    clearInterval(timer);
});

title.addEventListener('mouseleave', () => {
    timer = setInterval(() => {
        showTime();
    }, 1000);
});