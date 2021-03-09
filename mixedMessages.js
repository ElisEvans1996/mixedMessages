// array of possible running distances
const runDistance = ["3 km", "5 km", "10 km", "15 km"];
// array of run types
const runType = ["hilly", "flat", "tempo", "intervals", "easy"];
// array of run terrains
const runTerrain = ["road", "trail", "fell", "snow", "sand"];

// function to generate random text
function randomRun() {
    //create a random number dependent on the array length
    function getRandomNumber(array){
        return Math.floor(Math.random()*array.length);
    }

    //Applying the random number to the arrays
    let distance = runDistance[getRandomNumber(runDistance)];
    let type = runType[getRandomNumber(runType)];
    let terrain = runTerrain[getRandomNumber(runTerrain)];

    //Concatenation
    let todayRun = `Your run today is ${distance}, ${type} and ${terrain}`;
    console.log(todayRun);
}

randomRun();
