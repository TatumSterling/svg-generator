function createCircle(res) {
    return `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${res.shapeColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${res.txtColor}">${res.letters}</text>
    </svg>`
};

function createTriangle(res) {
    return `
    <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${res.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${res.txtColor}">${res.letters}</text>
    </svg>`
};

function createSquare(res) {
    return `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${res.shapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${res.txtColor}">${res.letters}</text>
    </svg>`
};

module.exports= {createCircle, createTriangle, createSquare}