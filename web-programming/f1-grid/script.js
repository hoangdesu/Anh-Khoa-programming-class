const teams = [
    {
        ranking: 1,
        points: 188,
        name: 'McLaren',
        logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mclaren-logo.png',
        drivers: [
            {
                name: 'Oscar Piastri',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png'
            },
            {
                name: 'Lando Norris',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png'
            }
        ],
        car: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png',
        color: '#FF8000'
    },
    {
        ranking: 2,
        points: 111,
        name: 'Mercedes',
        logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mercedes-logo.png',
        drivers: [
            {
                name: 'George Russel',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png'
            },
            {
                name: 'Kimi Antonelli',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/ANDANT01_Kimi_Antonelli/andant01.png'
            }
        ],
        car: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png',
        color: '#27F4D2'
    },
    {
        ranking: 3,
        points: 89,
        name: 'Red Bull Racing',
        logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/red-bull-racing-logo.png',
        drivers: [
            {
                name: 'Max Verstappen',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png'
            },
            {
                name: 'Yuki Tsunoda',
                image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png'
            }
        ],
        car: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png',
        color: '#3671c6'
    },
];

const renderTeamBox = (team) => {
    return `
        <a class="team-box" href="/teams/${team.name}.html">
            <div class="row1-stats">
                <div class="ranking">${team.ranking}</div>
                <div class="points">
                    <span>${team.points}</span> 
                    <span>PTS</span>
                </div>
            </div>
            <div class="row2-team">
                <h1 style="border-left: 6px solid ${team.color};">${team.name}</h1>
                <img src="${team.logo}" alt="${team.name}">
            </div>
            <div class="row3-drivers">
                <div class="driver">
                    <h3>${team.drivers[0].name}</h3>
                    <img src="${team.drivers[0].image}" alt="${team.drivers[0].name}">
                </div>
                <div class="driver">
                    <h3>${team.drivers[1].name}</h3>
                    <img src="${team.drivers[1].image}" alt="${team.drivers[1].name}">
                </div>
            </div>
            <div class="row4-car">
                <img src="${team.car}" alt="${team.name}">
            </div>
        </a>
    `;
}

const teamGrid = document.querySelector('.team-grid');

for (let i = 0; i < teams.length; i++) {
    teamGrid.innerHTML += renderTeamBox(teams[i]);
}

const teamBoxes = document.querySelectorAll('.team-box');

// change the border colors on mouse hover
teamBoxes.forEach((teamBox, i) => {
    teamBox.addEventListener('mouseenter', () => {
        teamBox.style.borderColor = teams[i].color;
    });

    teamBox.addEventListener('mouseleave', () => {
        teamBox.style.borderColor = 'black';
    });
});

