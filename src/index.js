'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.8c6da288-c6e6-4966-a4a5-9e8e50abfd4a"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"; Find in "SkillsI Info" section
var SKILL_NAME = 'Fun with Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "A year on Mercury is just 88 days long.",
    "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
    "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
    "On Mars, the Sun appears about half the size as it does on Earth.",
    "Earth is the only planet not named after a god.",
    "Jupiter has the shortest day of all the planets.",
    "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
    "The Sun contains 99.86% of the mass in the Solar System.",
    "The Sun is an almost perfect sphere.",
    "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
    "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    "The temperature inside the Sun can reach 15 million degrees Celsius.",
    "The Moon is moving approximately 3.8 cm away from our planet every year.",
    "The Honey Badger can be found in Africa, the Middle East and the Indian Subcontinent.",
    "Honey Badgers have been known to get comfortable in the dens of aardvarks or in the tunnels of foxes, mongooses, or springhares. Really any crevice or hole will do for the honey badger.",
    "Honey Badgers are so intelligent that they even use tools. Video from Moholoholo Wildlife Rehabilitation Center in South Africa revealed that a team of honey badgers used sticks, a rake, mud, stones, and pure determination in their attempts to escape.",
    "Carrots used to be purple until the 17th century.",
    "Which came first, the fruit or the color? Answer, the color. The color orange was named after the fruit.",
    "Pound cake got its name from its original recipe, which called for a pound each of butter, eggs, sugar, and flour.",
    "The Parrot fish eats coral and poops sand. This has led to creation for many small islands and beaches of the Caribbean.",
    "Scientists were monitoring whale stress levels by analyzing their poop and found that their stress plummeted immediately following the 9/11 attacks. It turns out this was due to all air traffic being halted, which calmed the oceans of low frequency noise which whales use to communicate",
    "The smell of books makes some people need to poop.",
    "Doctors are transplanting poop from healthy people into the stomachs of people with certain illnesses and it is healing them at a rate of 91-98%.",
    "Wombats have cube shaped poop, which they use to remember where they live.",
    "Doctors are transplanting poop from healthy people into the stomachs of people with certain illnesses and it is healing them at a rate of 91-98%.",
    "Pandas can poop up to 48 pounds per day.",
    "Dubai has no sewer system. Instead they use poop trucks to haul the entire cities’ excrement away."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fun fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};