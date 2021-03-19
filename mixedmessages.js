/* The Mixed Messages Portfolio project is part of Codecademy's Full Stack Engineer course. The objective of this project is to build a message generator program using Javascript.

For this project I chose to create a mixed message based on a trip to the zoo (pre-covid). The message will read: "My day at the zoo was $[adjective}! There was [a/an] ${animal1} at the ${place1} which caused everyone to panic. When we got to the ${place2} there were ${animal2} everywhere! We barely made it out of the park!" */

const newMixedMessage = () => {

    // Word options for the mixed message
    let adjectiveOptions = ['amazing','horrible','terrifying','horrifying','crazy','exhilarating','agonizing','magnificent','glamorous','interesting'];

    let animal1Options = ['lion','tiger','bear','mountain lion','snow leopard','polar bear','black bear','brown bear','cobra','puma'];

    let place1Options = ['Jungle Odyssey','Aquarium','Kids Kingdom','Tropical Forest','Visitor Center'];

    let place2Options = ['Forest Passage','African Savanna','Water\'s Edge','Village Market','Safari Plaza'];

    let animal2Options = ['bald eagles','goats','zebras','parrots','donkeys','prairie dogs','bats','toucans','hawks','alpacas'];

    // Helper function to generate random number
    const random = arr => {
        let randomNum = Math.floor(Math.random() * arr.length);
        return arr[randomNum];
    }

    // Choose a random word from the array options for each variable in the template literal.
    let adjective = random(adjectiveOptions);
    let animal1 = random(animal1Options);
    let place1 = random(place1Options);
    let place2 = random(place2Options);
    let animal2 = random(animal2Options);
    let article;

    // Generate the appropriate article 
    let checkLetter = animal1[0];
    switch(checkLetter) {
        case 'a':
            article = "an";
            break;
        case 'e':
            article = "an";
            break;
        case 'i':
            article = "an";
            break;
        case 'o':
            article = "an";
            break;
        case "u":
            article = "an";
            break;
        default:
            article = "a";
    }
    
    // Establish mixed message
    let mixedMessage = `My day at the zoo was ${adjective}! There was ${article} ${animal1} at the ${place1} which caused everyone to panic. When we got to the ${place2}, there were ${animal2} everywhere! We barely made it out of the park!`;

    return mixedMessage;
}


console.log(newMixedMessage());