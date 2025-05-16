/* TEMPLATE */
/*
  {
    beforePart: "",
    quotePart: "",
    afterPart: "",
    choices: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
    },
    custom: {},
    answer: "",
  },
*/

const theQuestions = [
  {
    beforePart: "Complete the following quote from Jesus in the Gospel of John (NIV):",
    quotePart: "For God so loved the world that He gave His one and only son, that whoever _____ shall not perish but have eternal life. For God did not send His Son into the world to condemn the world, but to save the world through Him.",
    afterPart: "",
    choices: {
      a: "believes in Him",
      b: "is a Christian",
      c: "keeps the Commandments",
      d: "is a good person",
      e: "accepts Him as their Lord and Savior",
      f: "does not contribute to Climate Change",
    },
    custom: {},
    answer: "a",
  },
];


////////////////////


const container = document.querySelector('.container');
/* Header */
const header = document.querySelector('.header');
const category = document.querySelector('.category');
const progress = document.querySelector('.progress');
/* Card */
const qBeforePart = document.querySelector('.q-before-part');
const qQuotePart = document.querySelector('.q-quote-part');
const qAfterPart = document.querySelector('.q-after-part');
const answerSelection = document.querySelector('.answer-selection');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');


function displayContent(question) {
  qBeforePart.textContent = question.beforePart;
  qAfterPart.textContent = question.afterPart;
  qQuotePart.textContent = question.quotePart;

  const choices = Object.entries(question.choices);  // so i can use for loop structure without having a hasOwnProperty thing
  const isEmpty = (choices.length === 0);
  if (!isEmpty) {
    for (const [key, value] of choices) {
      const radio = document.createElement('input');
      radio.setAttribute('id', key);
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'radio');
      ////
      const label = document.createElement('label');
      label.setAttribute('for', key);
      label.textContent = `${key}) ${value}`;
      ////
      answerSelection.append(radio, label);
    }
  }
}


displayContent(theQuestions[0]);
