/* TEMPLATE */
/*
  {  // 10
    category: "JESUS",
    hellTheme: false,
    beforePart: "",
    quotePart: ["",],  // you may need quotes in places
    afterPart: "",
    choices: {
      a: "",  // no cap first letter, only prop nouns
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
    },
    answer: "",
  },
*/

const theQuestions = [
  {  // 1
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
    answer: "a",
  },
  {  // 2
    category: 'JESUS',
    beforePart: "Complete the following statement from Jesus in the Gospel of Matthew (NIV):",
    quotePart: ["\"Not everyone who says to me, 'Lord, Lord,' will enter the Kingdom of Heaven, but only _____\"",],
    afterPart: "",
    choices: {
      a: "those who accept me as their Lord and Savior",
      b: "those who are tolerant of different races, sexes, and religions",
      c: "those who are not evil",
      d: "the one who does the will of my Father who is in Heaven",
      e: "Jesus did not say this and everybody will go to Heaven because there is no such thing as Hell.",
    },
    answer: "d",
  },
  {  // 3
    category: "JESUS",
    beforePart: "Read the following passage from the Gospel of Luke (NIV):",
    quotePart: ["On one occasion an expert in the law stood up to test Jesus. \"Teacher,\" he asked, \"what must I do to inherit eternal life?\"", "\"What is written in the law?\" he replied. \"How do you read it?\"", "He answered, \"'Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind'; and, 'Love your neighbor as yourself.'\""],
    afterPart: "Choose Jesus' Reply to the expert in the law.",
    choices: {
      a: "\"That is false,\" Jesus replied. \"How is it you are considered a scholar?\"",
      b: "\"That is false,\" Jesus replied. \"This teaching is of the Pharisees but not of God.\"",
      c: "\"That was true with the Old Covenant [based upon law], which has been fulfilled in your sight,\" Jesus replied. \"In the New Covenant now upon you, grace is the path to eternal life.\"",
      d: "\"You have answered correctly,\" Jesus replied. \"Do this and you will live.\"",
    },
    answer: "d",
  },
  {  // 4
    category: "JESUS",
    beforePart: "Complete the passage below from the Gospel of Mark (KJV):",
    quotePart: ["Now when Jesus was risen early the first day of the week, he appeared first to Mary Magdalene, out of whom he had cast seven devils.", "And she went and told them that had been with him, as they mourned and wept.", "And they, when they had heard that he was alive, and had been seen of her, believed not.", "After that he appeared unto two of them, as they walked, and went into the country.", "And they went and told it unto the residue: neither believed they them.", "Afterward he appeared unto the eleven as they sat at meat, and upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen.", "And he said unto them, \"Go ye into all the world, and preach the gospel to every creature.", "He that _____ shall be saved; but he that _____ shall be damned.\""],
    afterPart: "",
    choices: {
      a: "confess with thy lips / doeth not",
      b: "believeth and is baptized / believeth not",
      c: "be not sexist / be misogynistic",
      d: "doeth good / doeth evil",
      e: "doth convert to Christ / doth remain a Jew",
    },
    answer: "b",
  },
  {  // 5
    category: "JESUS",
    hellTheme: true,
    beforePart: "Complete Jesus' words from the Gospel of John (NAB)",
    quotePart: ["Amen, Amen, I say to you, the hour is coming and is now here when the dead will hear the voice of the Son of God, and those who hear will live. For just as the Father has life in himself, so also he gave his Son the possission of life in himself. And he gave him power to exercise judgment, because he is the Son of Man. Do not be amazed at this, because the hour is coming in which all who are in the tombs will hear his voice and will come out, those who _____ to the resurrection of life, but those who _____ to the resurrection of condemnation.",],  // you may need quotes in places
    afterPart: "",
    choices: {
      a: "have accepted me as their Lord / are unsaved",
      b: "are Baptized / are not Baptized",
      c: "are still human / are zombies",
      d: "are on the right / are on the left",
      e: "are good / are bad",
      f: "have good hearing / are deaf",
      g: "have done good deeds / have done wicked deeds",
    },
    answer: "g",
  },
  {  // 6
    category: "JESUS",
    beforePart: "Complete the words of Jesus in Luke's Gospel (NAB):",
    quotePart: ["He came to Jericho and intended to pass through the town. Now a man there named Zacchaeus, who was a chief tax collector and also a wealthy man, was seeking to see who Jesus was; but he could not see him because of the crowd, for he was short in stature. So he ran ahead and climbed a sycamore tree in order to see Jesus, who was about to pass that way. When he reached the place, Jesus looked up and said to him, \"Zacchaeus, come down quickly, for today I must stay at your house.\" And he came down quickly and received him with joy. When they all saw this, they began to grumble, saying, \"He has gone to stay at the house of a sinner.\" But Zacchaeus stood there and said to the Lord, \"Behold, half of my possessions, Lord, I shall give to the poor, and if I have extorted anything from anyone I shall repay it four times over.\" And Jesus said to him, \"Today Salvation has come to this house because this man too is a descendant of Abraham. For the Son of Man has come _____.\"",],
    afterPart: "",
    choices: {
      a: "to preach the Gospel to all the house of Israel",
      b: "to seek and to save what was lost",
      c: "to all who welcome him",
      d: "to make reparations",
      e: "to collect interest",
      f: "to tax the rich",
    },
    answer: "b",
  },
  {  // 7
    category: "JESUS",
    beforePart: "In the Sermon on the Mount, Jesus taught the crowds the following prayer:",
    quotePart: ["\"Our Father who art in heaven, \n    Hallowed be thy name. \nThy kingdom come. \nThy will be done on earth \n    as it is in Heaven. \nGive us this day our daily bread; \n    and forgive us our trespasses \n        as we forgive those who \ntrespass against us; \nand lead us not into temptation, \n    but deliver us from evil.\"",],  // added four spaces four times, and eight spaces once
    afterPart: "What did Jesus say immediately after this?",
    choices: {
      a: "\"If you do not treat the Father's name as hallowed, you will not go to heaven.\"",
      b: "\"The kingdom of God will come shortly after my return, for I will be raised to the heavens after I die.\"",
      c: "\"For if you forgive men their trespasses, your heavenly father also will forgive you; but if you do not forgive men their trespasses, neither will your Father forgive your trespasses.\"",
      d: "\"For my Father will never lead you into temptation that you cannot handle.\"",
      e: "\"Amen\"",
    },
    answer: "c",
  },
  {  // 8
    category: "JESUS",
    hellTheme: true,
    beforePart: "Jesus told His disciples many troubling things they should expect at the end of the age. Complete the following scripture from the Gospel of Matthew (NAB):",
    quotePart: ["\"Then they will hand you over to persecution, and they will kill you. You will be hated by all nations because of my name. And then many will be led into sin; they will betray and hate one another. Many false prophets will arise and deceive many; and because of the increase of evildoing, the love of many will grow cold. But the _____ will be saved.\"",],
    afterPart: "",
    choices: {
      a: "ones who accept me as their Lord and Savior",
      b: "ones who run fast when they see these signs",
      c: "ones who live sustainably",
      d: "Jews",
      e: "one who perseveres to the end",
      f: "true Christian",
    },
    answer: "e",
  },
  {  // 9
    category: "JESUS",
    beforePart: "In the Gospel of John (KJV), Jesus described Himself to the crowds of people as the \"bread of life\" that \"comes down from heaven.\" He then said:",
    quotePart: ["\"I am that bread of life.", "Your fathers did eat manna in the wilderness, and are dead.", "This is the bread which cometh down from heaven, that a man may eat thereof, and not die.", "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever: and the bread that I will give is my flesh, which I will give for the life of the world...", "The Jesus said unto them, Verily, verily, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you.\""],
    afterPart: "How did many of His disciples react after His statements?",
    choices: {
      a: "They knew Jesus was talking figuratively about Moses giving manna to the people; they invited Him to stay on longer in their town.",
      b: "They thought that Jesus was talking about Moses and that Jesus was comparing Himself to Elijah in the desert.",
      c: "They rejected what Jesus said, returned to their former way of life, and no longer accompanied Him.",
      d: "They did not know what Jesus was talking about, but they invited him to dinner.",
    },
    answer: "c",
  },
  {  // 10
    category: "JESUS",
    beforePart: "Complete Jesus' words in the following Scripture from the Gospel of Luke (NAB):",
    quotePart: ["\"Stop judging and you will not be judged. Stop condemning and you will not be condemned. __1__ and you will be __2__. Give and gifts will be given to you; a good measure, packed together, shaken down, and overflowing, will be poured into your lap. For the measure with which you measure will in return be measured out to you.\"",],
    afterPart: "",
    choices: {
      a: "",  // no cap first letter, only prop nouns
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
    },
    answer: "",
  },
  {  // 11
    category: "JESUS",
    beforePart: "",
    quotePart: ["",],  // you may need quotes in places
    afterPart: "",
    choices: {
      a: "",  // no cap first letter, only prop nouns
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
    },
    answer: "",
  },
];


////////////////////
const userAnswers = [];

let questionNumber = 0;
let userSelection;

const container = document.querySelector('.container');
////
const header = document.querySelector('.header');
const category = document.querySelector('.category');
const progress = document.querySelector('.progress');
////
const qBeforePart = document.querySelector('.q-before-part');
const qQuotePart = document.querySelector('.q-quote-part');
const qAfterPart = document.querySelector('.q-after-part');
////
const answerSelection = document.querySelector('.answer-selection');
////
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');


function displayContent(question) {
  category.textContent = question.category;
  progress.textContent = `${theQuestions.indexOf(question)+1} of ${theQuestions.length}`;

  qBeforePart.textContent = question.beforePart;
  ////
  qQuotePart.textContent = '';
  question.quotePart.forEach((para) => {
    const p = document.createElement('p');
    p.textContent = para;
    qQuotePart.appendChild(p);
  });
  ////
  if (!question.afterPart) qAfterPart.setAttribute('style', 'display: none');
  else qAfterPart.removeAttribute('style');
  qAfterPart.textContent = question.afterPart;

  answerSelection.textContent = '';
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

  if (userSelection) {
    const prevSelectedRadio = document.getElementById(userSelection);
    prevSelectedRadio.checked = true;
  }

  /* Special Rules */
  if (questionNumber === 0) {
    backBtn.setAttribute('style', 'display: none');
  } else if (questionNumber === theQuestions.length-1) {
    nextBtn.setAttribute('style', 'display: none');
    backBtn.setAttribute('style', 'margin: 0');
  } else {
    backBtn.removeAttribute('style');
    nextBtn.removeAttribute('style');
  }
  if (questionNumber+1 == 7) {
    qQuotePart.setAttribute('style', 'text-align: start; white-space: pre');
  } else {
    qQuotePart.removeAttribute('style');
  }
  if (questionNumber+1 == 10 && false) {  // for questions with convoluted numbered blanks  // wait why the heck didn't we just do the division thing?! [at least i got a small mental workout]
    qQuotePart.textContent = '';
    question.quotePart.forEach((para) => {
      const p = document.createElement('p');
      const re= /__\d__/g;
      const numberedBlanks = para.match(re);
      console.log(numberedBlanks);
      if (numberedBlanks) {
        let lastBlank = 0;
        for (const blank of numberedBlanks) {
          const span = document.createElement('span');
          const number = blank.slice(2, 3);
          span.classList.add('fill-in-the-blank');
          span.textContent = `  ${number}  `;
          const textBeforeBlank = para.slice(lastBlank, para.indexOf(blank));
          lastBlank = para.indexOf(blank) + blank.length;
          p.append(textBeforeBlank, span);
        }
        const restOfText = para.slice(lastBlank);
        p.append(restOfText);
      }
      // p.textContent = para;
      qQuotePart.appendChild(p);
    });
  }
}


function setUserAnswer() {
  if (userSelection) {
    userAnswers[questionNumber] = userSelection;
    userSelection = undefined;
    console.log(userAnswers);
    return true;
  }
}


function QuizController() {
  questionNumber = theQuestions.length - 1;
  displayContent(theQuestions[questionNumber]);

  answerSelection.addEventListener('click', (e) => {
    userSelection = (e.target.id) ? e.target.id : undefined;  // 'user selected label or nothing'
  });

  nextBtn.addEventListener('click', () => {
    const isAnswered = setUserAnswer();
    if (!isAnswered) console.log('Question skipped!');
    questionNumber++;
    // window.scrollTo(0, 0);  // commenting this out for now so i can get to the btn's faster
    userSelection = userAnswers[questionNumber];
    displayContent(theQuestions[questionNumber]);
  });

  backBtn.addEventListener('click', () => {
    setUserAnswer();  // so that >whenever< something is answered, it stays answered (i think that is the best UX)
    questionNumber--;
    // window.scrollTo(0, 0);
    userSelection = userAnswers[questionNumber];
    displayContent(theQuestions[questionNumber]);
  });
}


QuizController();
