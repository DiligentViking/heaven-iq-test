/* TEMPLATE */
/*
  {
    beforePart: "",
    quotePart: ["",],  // you may need quotes in places
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
    category: 'JESUS',
    beforePart: "Complete the following quote from Jesus in the Gospel of John (NIV):",
    quotePart: ["\"For God so loved the world that He gave His one and only son, that whoever _____ shall not perish but have eternal life. For God did not send His Son into the world to condemn the world, but to save the world through Him.\"",],
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
////
const header = document.querySelector('.header');
const category = document.querySelector('.category');
const progress = document.querySelector('.progress');
////
const qBeforePart = document.querySelector('.q-before-part');
const qQuotePart = document.querySelector('.q-quote-part');
const qAfterPart = document.querySelector('.q-after-part');
const answerSelection = document.querySelector('.answer-selection');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');


function displayContent(question) {
  category.textContent = question.category;
  progress.textContent = `${theQuestions.indexOf(question)+1} of ${theQuestions.length}`;

  qBeforePart.textContent = question.beforePart;
  ////
  question.quotePart.forEach((para) => {
    const p = document.createElement('p');
    p.textContent = para;
    qQuotePart.appendChild(p);
  });
  ////
  if (!question.afterPart) qAfterPart.setAttribute('style', 'display: none');
  else qAfterPart.textContent = question.afterPart;

  const choices = Object.entries(question.choices);  // so i can use for loop structure without having a hasOwnProperty thing
  const isEmpty = (choices.length === 0);
  if (!isEmpty) {
    for (const [key, value] of choices) {
      const choiceDiv = document.createElement('div');
      choiceDiv.classList.add('choice');
      ////
      const input = document.createElement('input');
      input.setAttribute('id', key);
      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'radio');
      ////
      const label = document.createElement('label');
      label.setAttribute('for', key);
      label.textContent = `${key}) ${value}`;
      ////
      choiceDiv.append(input, label);
      answerSelection.append(choiceDiv);
    }
  }
}


displayContent(theQuestions[0]);
