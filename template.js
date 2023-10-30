function createCircle(res) {
    `<svg height = "300" width="200">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${res.shapeColor}" />
        <text x="30" y="60" fill="${res.txtColor}" style="font-size: 12px;">${res.letters}</text>
    </svg>
    `
};

function createTriangle(res) {
    `<svg height="300" width="200">
    <polygon points="100,10 40,290 160,290" fill="${res.shapeColor}" />
    <text x="30" y="50" fill="${res.txtColor}">${res.letters}</text>
    </svg>`
};

function createSquare(res) {
    `<svg height="300" width="200">
        <rect x="10" y="10" width="100" height="100" fill="${res.shapeColor}" />
        <text x="30" y="50" fill="${res.txtColor}">${res.letters}</text>
    </svg>`
};

module.exports= {createCircle, createTriangle, createSquare}