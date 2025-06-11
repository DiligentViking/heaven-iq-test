// TEMPLATE //
/* 
  {  // 12
    passage: "",
    verses: [
      "",
    ]
  },
*/

const theAnswers = [
  {  // 1
    passage: "John 3:16-21 (NIV)",
    verses: ["\u201cFor God so loved the world that He gave His one and only son, that whoever $believes in him$ shall not perish but have eternal life. For God did not send His Son into the world to condemn the world, but to save the world through Him.\u201d"]
  },
  {  // 2
    passage: "Matthew 7:21 (NIV)",
    verses: ["\u201cNot everyone who says to me, \u2018Lord, Lord,\u2019 will enter the Kingdom of Heaven, but only $the one who does the will of my Father who is in heaven$.\u201d"]
  },
  {  // 3
    passage: "Luke 10:25-28 (NIV)",
    verses: ["On one occasion an expert in the law stood up to test Jesus. \u201cTeacher,\u201d he asked, \u201cwhat must I do to inherit eternal life?\u201d", "\u201cWhat is written in the law?\u201d he replied. \u201cHow do you read it?\u201d", "He answered, \u201c\u2018Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind\u2019; and, \u2018Love your neighbor as yourself.\u2019\u201d", "$\u201cYou have answered correctly,\u201d Jesus replied. \u201cDo this and you will live.\u201d$"]
  },
  {  // 4
    passage: "Mark 16:9-16 (KJV)",
    verses: ["Now when Jesus was risen early the first day of the week, he appeared first to Mary Magdalene, out of whom he had cast seven devils.", "And she went and told them that had been with him, as they mourned and wept.", "And they, when they had heard that he was alive, and had been seen of her, believed not.", "After that he appeared unto two of them, as they walked, and went into the country.", "And they went and told it unto the residue: neither believed they them.", "Afterward he appeared unto the eleven as they sat at meat, and upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen.", "And he said unto them, \u201cGo ye into all the world, and preach the gospel to every creature.", "He that $believeth and is baptized$ shall be saved; but he that $believeth not$ shall be damned.\u201d"]
  },
  {  // 5
    passage: "John 5:24-29 (NAB)",
    verses: ["Amen, Amen, I say to you, the hour is coming and is now here when the dead will hear the voice of the Son of God, and those who hear will live. For just as the Father has life in himself, so also he gave his Son the possession of life in himself. And he gave him power to exercise judgment, because he is the Son of Man. Do not be amazed at this, because the hour is coming in which all who are in the tombs will hear his voice and will come out, those who $have done good deeds$ to the resurrection of life, but those who $have done wicked deeds$ to the resurrection of condemnation."]
  },
  {  // 6
    passage: "Luke 19:1-10 (NAB)",
    verses: ["He came to Jericho and intended to pass through the town. Now a man there named Zacchaeus, who was a chief tax collector and also a wealthy man, was seeking to see who Jesus was; but he could not see him because of the crowd, for he was short in stature. So he ran ahead and climbed a sycamore tree in order to see Jesus, who was about to pass that way. When he reached the place, Jesus looked up and said to him, \u201cZacchaeus, come down quickly, for today I must stay at your house.\u201d And he came down quickly and received him with joy. When they all saw this, they began to grumble, saying, \u201cHe has gone to stay at the house of a sinner.\u201d But Zacchaeus stood there and said to the Lord, \u201cBehold, half of my possessions, Lord, I shall give to the poor, and if I have extorted anything from anyone I shall repay it four times over.\u201d And Jesus said to him, \u201cToday Salvation has come to this house because this man too is a descendant of Abraham. For the Son of Man has come $to seek and to save what was lost$.\u201d"]
  },
  {  // 7
    passage: "Matthew 6:9-15 (RSV SCE)",
    verses: ["\u201cOur Father who art in heaven, \n    Hallowed be thy name. \nThy kingdom come. \nThy will be done on earth \n    as it is in Heaven. \nGive us this day our daily bread; \n    and forgive us our trespasses \n        as we forgive those who \ntrespass against us; \nand lead us not into temptation, \n    but deliver us from evil.\u201d", "$\u201cFor if you forgive men their trespasses, your heavenly Father also will forgive you; but if you do not forgive men their trespasses, neither will your Father forgive your trespasses.\u201d$"]
  },
  {  // 8
    passage: "Matthew 24:9-13 (NAB)",
    verses: ["\u201cThen they will hand you over to persecution, and they will kill you. You will be hated by all nations because of my name. And then many will be led into sin; they will betray and hate one another. Many false prophets will arise and deceive many; and because of the increase of evildoing, the love of many will grow cold. But the $one who perseveres to the end$ will be saved.\u201d",],
  },
  {  // 9
    passage: "John 6:48-51,53 (KJV)",
    verses: ["\u201cI am that bread of life.", "Your fathers did eat manna in the wilderness, and are dead.", "This is the bread which cometh down from heaven, that a man may eat thereof, and not die.", "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever: and the bread that I will give is my flesh, which I will give for the life of the world...", "The Jesus said unto them, Verily, verily, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you.\u201d", "How did many of His disciples react after His statements?", "$ANSWER: They rejected what Jesus said, returned to their former way of life, and no longer accompanied him.$"]
  },
  {  // 10
    passage: "Luke 6:37-38 (NAB)",
    verses: ["\u201cStop judging and you will not be judged. Stop condemning and you will not be condemned. $Forgive$ and you will be $forgiven$. Give and gifts will be given to you; a good measure, packed together, shaken down, and overflowing, will be poured into your lap. For the measure with which you measure will in return be measured out to you.\u201d"]
  },

  {  // 11
    passage: "Matthew 5:27-30 (NIV)",
    verses: ["\u201c...anyone who looks at a woman lustfully has already committed adultery with her in his heart. If your right eye causes you to stumble, gouge it out and throw it away... And if your right hand causes you to stumble, cut it off and throw it away. $It is better for you to lose one part of your body than for your whole body to go into hell.$\u201d",]
  },
  {  // 12
    passage: "Matthew 16:24-2 (KJV)",
    verses: ["Then said Jesus unto his disciples, If any man will come after me, let him $deny himself, and take up his cross,$ and follow me.", "For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.", "For what is a man profited, if he shall gain the whole world, and lose his own soul?"],
  },
  {  // 13
    passage: "John 15:11-14 (NAB)",
    verses: ["\u201cI have told you this so that my joy might be in you and your joy might be complete. This is my commandment: love one another $as I love you$. No one has greater love than this, to lay down one\u2019s life for one\u2019s friends. You are my friends if you do what I command you.\u201d"]
  },
  {  // 14
    passage: "Matthew 10:32-33 (NAB)",
    verses: ["\u201cEveryone who acknowledges me before others I will acknowledge before my heavenly Father. But whoever denies me before others, $I will deny before my heavenly Father$.\u201d"]
  },
  {  // 15
    passage: "Matthew 19:16-17 (NAB)",
    verses: ["Now someone approached him and said, \u201cTeacher, what good must I do to gain eternal life?\u201d He answered him, \u201cWhy do you ask me about the good? There is only One who is good. $If you wish to enter into life, keep the commandments.\u201d"]
  },
  {  // 16
    passage: "Matthew 7:13-14 (NAB)",
    verses: ["Which statement below did Jesus make about the road to life (Heaven) in the Gospel of Matthew (NAB)?", "$ANSWER: \u201cEnter by the narrow gate; for the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few.\u201d$"]
  },
  {  // 17
    passage: "Matthew 25:31-46 (NIV)",
    verses: ["\u201cWhen the Son of Man comes in his glory, and all the angels with him, he will sit on his glorious throne. All the nations will be gathered before him, and he will separate the people one from another as a shepherd separates the sheep from the goats. He will put the sheep on his right and the goats on his left.", "\u201dThen the King will say to those on his right, \u2018Come, you who are blessed by my Father; take your inheritance, the kingdom prepared for you since the creation of the world...\u2019", "\u201cThen he will say to those on his left, \u2018Depart from me, you who are cursed, into the eternal fire prepared for the devil and his angels...\u2019\u201d", "Who does Jesus say are the sheep and the goats?", "$ANSWER: The sheep are the ones who gave food, drink, clothes, welcome, and care to \u201cthe least of [Jesus\u2019] brothers and sisters,\u201d the goats are the ones who did not.$"]
  },
  {  // 18
    passage: "Ezekiel 18:20-24 (NAB)",
    verses: ["\u201cJustice belongs to the just, and wickedness to the wicked.", "But if the wicked man turns away from all the sins he has committed, if he keeps all my statutes and does what is just and right, $he shall surely live$.", "...And if the just turn from justice and do evil, like all the abominations the wicked do... $they shall die$.\u201d"]
  },
  {  // 19
    passage: "Matthew 3:1-6 (KJV)",
    verses: ["In those days came John the Baptist, preaching in the wilderness of Judaea,", "And saying, $Repent ye:$ for the kingdom of heaven is at hand.", "For this is he that was spoken of by the prophet Esaias, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.", "And the same John had his raiment of camel\u2019s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.", "Then went out to him Jerusalem, and all Judaea, and all the region round about Jordan, And were baptized of him in Jordan, $confessing their sins$."]
  },
  {  // 20
    passage: "Revelation 7:9-17 (NAB)",
    verses: ["After this I had a vision of a great multitude, which no one could count, from every nation, race, people, and tongue. They stood before the throne and before the Lamb, wearing white robes and holding palm branches in their hands....", "Then one of the elders spoke up and said to me, \u201cWho are these wearing white robes, and where did they come from?\u201d I said to him, \u201cMy lord, you are the one who knows.\u201d He said to me, \u201cThese are the ones who have survived the time of great distress; they have washed their robes and made them white in the blood of the lamb.", "\u201cFor this reason they stand before God\u2019s throne and worship him day and night in his temple. \nThe one who sits on the throne will shelter them. \nThey will not hunger or thirst anymore, \nnor will the sun or any heat strike them. \nFor the Lamb who is in the center of the throne will shepherd them and lead them to springs of life-giving water, \nand God will $wipe away every tear from their eyes$.\u201d"],
  },


];

//////////

function displayAnswers(start, stop) {
  const main = document.querySelector('main');
  main.textContent = '';

  let fadeDelay = 0;

  for (let i = start; i <= stop; i++) {
    const section = document.createElement('div');
    const header = document.createElement('div');
    const paras = document.createElement('div');
    section.classList.add('section');
    header.classList.add('header');
    paras.classList.add('verses');  // note 'verses'

    // Header
    const tag = document.createElement('h2');
    const passage = document.createElement('h2');

    tag.classList.add('tag');
    if (i >= 10) tag.classList.add('longer');
    passage.classList.add('passage');

    tag.textContent = `q${i}`;
    passage.textContent = theAnswers[i-1].passage;

    header.appendChild(tag);
    header.appendChild(passage);

    fadeElem(header, ++fadeDelay);

    // Paras
    for (const verse of theAnswers[i-1].verses) {
      const p = document.createElement('p');
      highlightAnswer(p, verse);
      paras.appendChild(p);

      fadeElem(p, ++fadeDelay);
    }
    tweakIfSpecial(i, paras);

    // [end]
    section.appendChild(header);
    section.appendChild(paras);

    fadeElem(section, ++fadeDelay);

    main.appendChild(section);
  }
}

function fadeElem(elem, delay) {  // delay in deciseconds (times the multiplier)
  elem.classList.add('invisible');
  setTimeout(() => {
    elem.classList.remove('invisible');
    elem.classList.add('visible');
  }, delay * 1.00 * 1.25);
}

function tweakIfSpecial(qNum, paras) {
  switch (qNum) {
    case 7:
      const firstP = paras.firstChild;
      firstP.setAttribute('style', 'white-space: pre');
      break;
    case 20:
      const lastP = paras.lastChild;
      lastP.setAttribute('style', 'padding: 0 38px; white-space: pre-wrap;');
      break;
  }
}

function highlightAnswer(domObj, paragraph) {  // a helper function that uses regex
  let para = paragraph;

  const re = /\$.*?\$/g;
  const segmentsToHighlight = para.match(re);

  if (segmentsToHighlight) {
    for (const segment of segmentsToHighlight) {
      const theText = segment.slice(1, segment.length-1);
      const span = document.createElement('span');
      span.textContent = theText;

      span.classList.add('answer');

      const textBeforeBlank = para.slice(0, para.indexOf(segment));
      para = para.slice(para.indexOf(segment)+segment.length);

      domObj.append(textBeforeBlank, span);
    }
  }
  domObj.append(para);
}

function displayContent(pageNum) {
  // Answers to show
  switch (pageNum) {
    case 1:
      displayAnswers(1, 10);
      break;
    case 2:
      displayAnswers(11, 20);
      break;
    case 3:
      displayAnswers(21, 33);
      break;
  }

  // Exit button on last page
  const nextImg = document.querySelector('.next img');
  if (pageNum == 3) nextImg.src = '../assets/Answers/exit.png';
  else nextImg.src = '../assets/Answers/next.png';
}

function Controller() {
  let pageNum = 1;

  displayContent(1, 10);

  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', () => {
    if (pageNum == 1) window.location.href = './score.html';
    else displayContent(--pageNum);
  });

  const nextBtn = document.querySelector('.next');
  nextBtn.addEventListener('click', () => {
    if (pageNum == 3) window.location.href = './score.html';
    else displayContent(++pageNum);
  });
}

Controller();
