'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"; Find in "Skills Info" section
var SKILL_NAME = 'advise me';

/**
 * Array containing space advice.
 */
var ADVICE = [
    "Not to spoil the ending, but everything is going to be okay.",
    "Forget what hurt you in the past, but never forget what it taight you.",
    "Follow your heart, but take your brain with you.",
    "Don't complain to others. Write it down. Tell your god. Throw it out. Keep it to yourself.",
    "Worry less, smile more. Don't regret, just learn and grow",
    "It's hard to appreciate the value of what you haven't fully invested in.",
    "Never give up on what you something you really want. It's difficult to wait, but more difficult to regret.",
    "People don't always need advice. Sometimes all they really need is a hand to hold, an ear to listen, and a heart to understand them.",
    "You are confined only by the walls you build yourself.",
    "Don't make a permenant decision from a temporary emotion",
    "If you want something you've never ahd before, then you have to do something you've never done before.",
    "When you say yes to others, make sure you are not saying no to yourself.",
    "Promote what you love instead of bashing what you hate.",
    "Advice is what we ask for when we already know the answer but wish we didn't.",
    "You may not be able to decide to be happy, but you sure can decide to be miserable",
    "Live moves on and you have to let go. If you cling to your past you can't enjoy your future.",
    "Always be yourself. Unless you can be a unicorn. Then always be a unicorn.",
    "Do you wonder what everone is thinking about you? They are wondering the same thing.",
    "You are unique, but your emotions are not. Everyone suffers from the same scared, incesure, or lonely feelings.",
    "You con't have control over anyones feelings. They con't have control over yours.",
    "Your imagination is limitless. Manage expectaions carefully.",
    "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    "Don't let what you can't do stop you from doing what you can do.",
    "Quality is never an accident, it is always the result of intelligent effort.",
    "Don't get too caught up in praise or critisizm.",
    "Happiness is found in doing, not merely possessing.",
    "Attitude is just as important as ability. Have a good one.",
    "Learn to like yourself and your cruelties and angers will melt away.",
    "The actions of a person are the best interpretor of their thoughts."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetAdvice');
    },
    'GetAdviceIntent': function () {
        this.emit('GetAdvice');
    },
    'GetAdvice': function () {
        // Get a random space fact from the space advice list
        var adviceIndex = Math.floor(Math.random() * ADVICE.length);
        var randomAdvice = ADVICE[adviceIndex];

        // Create speech output
        var speechOutput = "Take my advice: " + randomAdvice;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomAdvice)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say give me advice, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Bye Now!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Stopping!');
    }
};