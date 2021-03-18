/* The Mixed Messages Portfolio project is part of Codecademy's Full Stack Engineer course. The objective of this project is to build a message generator program using Javascript.

For this project I chose to create a mixed message based on a trip to the zoo (pre-covid). The message will read: "My day at the zoo was $[adjective}! There was [a/an] ${animal1} at the ${place1} which caused everyone to panic. When we got to ${place2} there were ${animal2} [flying/running] around everywhere! We barely made it out of the park!" */

// Establish mixed message
let mixedMessage = `My day at the zoo was ${adjective}! There was ${article} ${animal1} at the ${place1} which caused everyone to panic. When we got to ${place2}, there were ${animal2} ${verb} around everywhere! We barely made it out of the park!`;

// Helper function to generate random number
const random = arr => {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return randomNumber;
}


