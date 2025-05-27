/* TEMPLATE */
/*
  {  // 10
    category: "JESUS",
    hellTheme: false,
    beforePart: "",
    quotePart: ["",],  // pay attention to quotes
    afterPart: "",
    choices: {
      a: "",  // pay attention to caps
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
    quotePart: ["\u201cFor God so loved the world that He gave His one and only son, that whoever _____ shall not perish but have eternal life. For God did not send His Son into the world to condemn the world, but to save the world through Him.\u201d",],
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
    quotePart: ["\u201cNot everyone who says to me, \u2018Lord, Lord,\u2019 will enter the Kingdom of Heaven, but only _____\u201d",],
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
    quotePart: ["On one occasion an expert in the law stood up to test Jesus. \u201cTeacher,\u201d he asked, \u201cwhat must I do to inherit eternal life?\u201d", "\u201cWhat is written in the law?\u201d he replied. \u201cHow do you read it?\u201d", "He answered, \u201c\u2018Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind\u2019; and, \u2018Love your neighbor as yourself.\u2019\u201d"],
    afterPart: "Choose Jesus\u2019 Reply to the expert in the law.",
    choices: {
      a: "\u201cThat is false,\u201d Jesus replied. \u201cHow is it you are considered a scholar?\u201d",
      b: "\u201cThat is false,\u201d Jesus replied. \u201cThis teaching is of the Pharisees but not of God.\u201d",
      c: "\u201cThat was true with the Old Covenant [based upon law], which has been fulfilled in your sight,\u201d Jesus replied. \u201cIn the New Covenant now upon you, grace is the path to eternal life.\u201d",
      d: "\u201cYou have answered correctly,\u201d Jesus replied. \u201cDo this and you will live.\u201d",
    },
    answer: "d",
  },
  {  // 4
    category: "JESUS",
    beforePart: "Complete the passage below from the Gospel of Mark (KJV):",
    quotePart: ["Now when Jesus was risen early the first day of the week, he appeared first to Mary Magdalene, out of whom he had cast seven devils.", "And she went and told them that had been with him, as they mourned and wept.", "And they, when they had heard that he was alive, and had been seen of her, believed not.", "After that he appeared unto two of them, as they walked, and went into the country.", "And they went and told it unto the residue: neither believed they them.", "Afterward he appeared unto the eleven as they sat at meat, and upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen.", "And he said unto them, \u201cGo ye into all the world, and preach the gospel to every creature.", "He that _____ shall be saved; but he that _____ shall be damned.\u201d"],
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
    beforePart: "Complete Jesus\u2019 words from the Gospel of John (NAB)",
    quotePart: ["Amen, Amen, I say to you, the hour is coming and is now here when the dead will hear the voice of the Son of God, and those who hear will live. For just as the Father has life in himself, so also he gave his Son the possession of life in himself. And he gave him power to exercise judgment, because he is the Son of Man. Do not be amazed at this, because the hour is coming in which all who are in the tombs will hear his voice and will come out, those who _____ to the resurrection of life, but those who _____ to the resurrection of condemnation.",],  // you may need quotes in places
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
    beforePart: "Complete the words of Jesus in Luke\u2019s Gospel (NAB):",
    quotePart: ["He came to Jericho and intended to pass through the town. Now a man there named Zacchaeus, who was a chief tax collector and also a wealthy man, was seeking to see who Jesus was; but he could not see him because of the crowd, for he was short in stature. So he ran ahead and climbed a sycamore tree in order to see Jesus, who was about to pass that way. When he reached the place, Jesus looked up and said to him, \u201cZacchaeus, come down quickly, for today I must stay at your house.\u201d And he came down quickly and received him with joy. When they all saw this, they began to grumble, saying, \u201cHe has gone to stay at the house of a sinner.\u201d But Zacchaeus stood there and said to the Lord, \u201cBehold, half of my possessions, Lord, I shall give to the poor, and if I have extorted anything from anyone I shall repay it four times over.\u201d And Jesus said to him, \u201cToday Salvation has come to this house because this man too is a descendant of Abraham. For the Son of Man has come _____.\u201d",],
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
    quotePart: ["\u201cOur Father who art in heaven, \n    Hallowed be thy name. \nThy kingdom come. \nThy will be done on earth \n    as it is in Heaven. \nGive us this day our daily bread; \n    and forgive us our trespasses \n        as we forgive those who \ntrespass against us; \nand lead us not into temptation, \n    but deliver us from evil.\u201d",],  // added four spaces four times, and eight spaces once
    afterPart: "What did Jesus say immediately after this?",
    choices: {
      a: "\u201cIf you do not treat the Father\u2019s name as hallowed, you will not go to heaven.\u201d",
      b: "\u201cThe kingdom of God will come shortly after my return, for I will be raised to the heavens after I die.\u201d",
      c: "\u201cFor if you forgive men their trespasses, your heavenly father also will forgive you; but if you do not forgive men their trespasses, neither will your Father forgive your trespasses.\u201d",
      d: "\u201cFor my Father will never lead you into temptation that you cannot handle.\u201d",
      e: "\u201cAmen\u201d",
    },
    answer: "c",
  },
  {  // 8
    category: "JESUS",
    hellTheme: true,
    beforePart: "Jesus told His disciples many troubling things they should expect at the end of the age. Complete the following scripture from the Gospel of Matthew (NAB):",
    quotePart: ["\u201cThen they will hand you over to persecution, and they will kill you. You will be hated by all nations because of my name. And then many will be led into sin; they will betray and hate one another. Many false prophets will arise and deceive many; and because of the increase of evildoing, the love of many will grow cold. But the _____ will be saved.\u201d",],
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
    beforePart: "In the Gospel of John (KJV), Jesus described Himself to the crowds of people as the \u201cbread of life\u201d that \u201ccomes down from heaven.\u201d He then said:",
    quotePart: ["\u201cI am that bread of life.", "Your fathers did eat manna in the wilderness, and are dead.", "This is the bread which cometh down from heaven, that a man may eat thereof, and not die.", "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever: and the bread that I will give is my flesh, which I will give for the life of the world...", "The Jesus said unto them, Verily, verily, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you.\u201d"],
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
    beforePart: "Complete Jesus\u2019 words in the following Scripture from the Gospel of Luke (NAB):",
    quotePart: ["\u201cStop judging and you will not be judged. Stop condemning and you will not be condemned. _____ and you will be _____. Give and gifts will be given to you; a good measure, packed together, shaken down, and overflowing, will be poured into your lap. For the measure with which you measure will in return be measured out to you.\u201d",],
    afterPart: "",
    choices: {
      a: "Forgive / forgiven",
      b: "Sin / unhappy",
      c: "Curse / cursed",
      d: "Praise / praised",
      e: "Believe / saved",
      f: "Complain / disliked",
    },
    answer: "a",
  },
  {  // 11
    category: "JESUS",
    hellTheme: true,
    beforePart: "In the Gospel of Matthew (NIV), Jesus said the following:",
    quotePart: ["\u201c...anyone who looks at a woman lustfully has already committed adultery with her in his heart. If your right eye causes you to stumble, gouge it out and throw it away... And if your right hand causes you to stumble, cut it off and throw it away.\u201d",],
    afterPart: "What did Jesus say right after these statements?",
    choices: {
      a: "\u201cThe right parts of your body are always more evil than the left parts.\u201d",
      b: "\u201cThat way you will only sin half as much.\u201d",
      c: "\u201cThis is not necessary for people who are saved.\u201d",
      d: "\u201cThese exaggerations indicate what all men deserve without grace.\u201d",
      e: "\u201cIt is better for you to lose one part of your body than for your whole body to go into hell.\u201d",
    },
    answer: "e",
  },
  {  // 12
    category: "JESUS",
    beforePart: "Complete the Scripture from the Gospel of Matthew (KJV):",
    quotePart: ["Then said Jesus unto his disciples, If any man will come after me, let him _____ and follow me.", "For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.", "For what is a man profited, if he shall gain the whole world, and lose his own soul?"],
    afterPart: "",
    choices: {
      a: "believeth in me, embrace my teachings,",
      b: "abandoneth fossil fuels,",
      c: "accept me as Lord and Savior",
      d: "try to keep up",
      e: "deny himself, and take up his cross,",
    },
    answer: "e",
  },
  {  // 13
    category: "JESUS",
    beforePart: "At the Last Supper, Jesus gave his disciples several instructions. Complete his words as they are recorded in the Gospel of John (NAB):",
    quotePart: ["\u201cI have told you this so that my joy might be in you and your joy might be complete. This is my commandment: love one another _____. No one has greater love than this, to lay down one\u2019s life for one\u2019s friends. You are my friends if you do what I command you.\u201d",],
    afterPart: "",
    choices: {
      a: "as I have commanded you",
      b: "as I love you",
      c: "as you love God",
      d: "unselfishly",
      e: "on Sundays",
      f: "more than your in-laws",
    },
    answer: "b",
  },
  {  // 14
    category: "JESUS",
    hellTheme: true,
    beforePart: "Jesus warned his disciples that they would be persecuted for proclaiming his words. Complete the following statement Jesus made in the Gospel of Matthew (NAB):",
    quotePart: ["\u201cEveryone who acknowledges me before others I will acknowledge before my heavenly Father. But whoever denies me before others _____.\u201d",],
    afterPart: "",
    choices: {
      a: ", will acknowledge me in the end",
      b: "is not really saved",
      c: "will only receive half the crowns as the others",
      d: ", I will deny before my heavenly Father",
      e: "better hope I don\u2019t find out about it",
    },
    answer: "d",
  },
  {  // 15
    category: "JESUS",
    beforePart: "In the Gospel of Matthew (NAB), a rich young man asked Jesus what he must do to gain eternal life. Choose Jesus\u2019 reply.",
    quotePart: ["Now someone approached him and said, \u201cTeacher, what good must I do to gain eternal life?\u201d He answered him, \u201cWhy do you ask me about the good? There is only One who is good. _____.\u201d",],
    afterPart: "",
    choices: {
      a: "Since nobody is good, you cannot earn Heaven by good works; simply believe in me and accept me as Lord",
      b: "If you wish to enter into life, keep the commandments",
      c: "Make a good confession before you die",
      d: "John 3:16",
      e: "There is no such thing as Hell, so do not worry about it",
    },
    answer: "b",
  },
  {  // 16
    category: "JESUS",
    beforePart: "Which statement below did Jesus make about the road to life (Heaven) in the Gospel of Matthew (NAB)?",
    quotePart: ["",],
    afterPart: "",
    choices: {
      a: "\u201cEnter by the narrow gate; for the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few.\u201d",
      b: "\u201cEnter by the wide gate; for the road to heaven is well-traveled, and most follow this path. For the gate to hell is narrow, and the few who enter by it are beholden to evil.\u201d",
      c: "\u201cAll roads lead to life because there is no such thing as Hell, as the false religions teach.\u201d",
      d: "\u201cAll roads lead to life for those who confess me with their lips and believe that i am God.\u201d",
      e: "\u201cLife is a journey, not a destination.\u201d",
    },
    answer: "a",
  },
  {  // 17
    category: "JESUS",
    hellTheme: true,
    beforePart: "Read the following scripture passage from the Gospel of Matthew (NIV) where Jesus talks about judging the nations:",
    quotePart: ["\u201cWhen the Son of Man comes in his glory, and all the angels with him, he will sit on his glorious throne. All the nations will be gathered before him, and he will separate the people one from another as a shepherd separates the sheep from the goats. He will put the sheep on his right and the goats on his left.", "\u201dThen the King will say to those on his right, \u2018Come, you who are blessed by my Father; take your inheritance, the kingdom prepared for you since the creation of the world...\u2019", "\u201cThen he will say to those on his left, \u2018Depart from me, you who are cursed, into the eternal fire prepared for the devil and his angels...\u2019\u201d"],
    afterPart: "Who does Jesus say are the sheep and the goats?",
    choices: {
      a: "The sheep are the ones who gave food, drink, clothes, welcome, and care to \u201cthe least of [Jesus\u2019] brothers and sisters,\u201d the goats are the ones who did not.",
      b: "The goats are the ones who were \u201csaved,\u201d the sheep are the ones who were not saved.",
      c: "The goats are the ones who \u201cDidn\u2019t wander from [Jesus\u2019] flock,\u201d the sheep are the ones that strayed.",
      d: "The sheep are the ones who confessed Jesus and lived \u201cin the kingdom\u201d of God, the goats are the ones who didn\u2019t follow Jesus and lived outside the gates.",
      e: "The sheep are the ones with soft wool, the goats are the ones with scratchy hair",
      f: "Jesus didn\u2019t say this because there is no such thing as Hell.",
    },
    answer: "a",
  },
  {  // 18
    category: "OLD TESTAMENT",
    beforePart: "Ezekiel was a prophet of the Old Testament era. Complete what God told him in the book of Ezekiel (NAB):",
    quotePart: ["\u201cJustice belongs to the just, and wickedness to the wicked.", "But if the wicked man turns away from all the sins he has committed, if he keeps all my statutes and does what is just and right, _____.", "...And if the just turn from justice and do evil, like all the abominations the wicked do... _____.\u201d"],
    afterPart: "",
    choices: {
      a: "he shall surely become a believer / they are still saved",
      b: "he will rejoin the house of Israel / they will be cast out and receive \u201can eye for an eye, a tooth for a tooth\u201d",
      c: "he shall surely live / they shall surely die",
      d: "he is now just / they are now wicked",
      e: "his friends will say he is no fun / he will fit in with the wrong crowd",
    },
    answer: "c",
  },
  {  // 19
    category: "JOHN THE BAPTIST",
    beforePart: "John the Baptist came to prepare the way for Jesus. Complete the following scripture from the Gospel of Matthew (KJV):",
    quotePart: ["In those days came John the Baptist, preaching in the wilderness of Judaea,", "And saying, _____ for the kingdom of heaven is at hand.", "For this is he that was spoken of by the prophet Esaias, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.", "And the same John had his raiment of camel\u2019s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.", "Then went out to him Jerusalem, and all Judaea, and all the region round about Jordan, And were baptized of him in Jordan, _____."],
    afterPart: "",
    choices: {
      a: "Listen ye: / and did receive instruction",
      b: "Listen ye: / and did drink",
      c: "Repent ye: / confessing their sins",
      d: "Repent ye: / receiving forgiveness",
      e: "Run: / and did cross of the other side",
      f: "Gather ye around: / and did bathe",
    },
    answer: "d",
  },
  {  // 20
    category: "APOSTLES",
    beforePart: "The book of Revelation is attributed to the apostle John. The \u201cLamb\u201d mentioned here is Jesus. Complete the following scripture from this book (NAB):",
    quotePart: ["After this I had a vision of a great multitude, which no one could count, from every nation, race, people, and tongue. They stood before the throne and before the Lamb, wearing white robes and holding palm branches in their hands....", "Then one of the elders spoke up and said to me, \u201cWho are these wearing white robes, and where did they come from?\u201d I said to him, \u201cMy lord, you are the one who knows.\u201d He said to me, \u201cThese are the ones who have survived the time of great distress; they have washed their robes and made them white in the blood of the lamb.", "\u201cFor this reason they stand before God\u2019s throne and worship him day and night in his temple. \nThe one who sits on the throne will shelter them. \nThey will not hunger or thirst anymore, \nnor will the sun or any heat strike them. \nFor the Lamb who is in the center of the throne will shepherd them and lead them to springs of life-giving water, \nand God will _____.\u201d"],
    afterPart: "",
    choices: {
      a: "wipe away every tear from their eyes",
      b: "overthrow their enemies",
      c: "answer their prayers",
      d: "take care of all their needs",
      e: "give them drink, and feed them in His house",
      f: "be their Father if they are saved",
    },
    answer: "a",
  },
  {  // 21
    category: "APOSTLES",
    beforePart: "The book of Revelation is attributed to the apostle John. Choose three things that John, in this book, says are NOT in Heaven (NAB):",
    quotePart: ["",],
    afterPart: "",
    choices: {
      a: "hot temperatures, the color red, the color black",
      b: "Catholics, Jews, Muslims",
      c: "judgemental people, Muslims, Protestants",
      d: "death, mourning, pain",
      e: "mosquitoes, snakes, scorpions",
      f: "dancing, parties, singing",
    },
    answer: "d",
  },
  {  // 22
    category: "APOSTLES",
    beforePart: "Read the Scripture passage below from the book of James (NAB) and choose which word is represented by the number 1 and which word is represented by the number 2:",
    quotePart: ["\u201cYou believe that God is one. You do well. Even the demons believe that and tremble. Do you want proof, you ignoramus, that __1__ without __2__ is useless? Was not Abraham our father justified by __2__ when he offered his son Isaac upon the altar? ... Thus the scripture was fulfilled that says, \u2018Abraham believed God, and it was credited to him as righteousness,\u2019 and he was called \u2018the friend of God.\u2019 See how a person is justified by __2__ and not by __1__ alone. And in the same way, was not Rahab the harlot also justified by __2__ when she welcomed the messengers and set them out by a different route? For just as a body without a spirit is dead, so also __1__ without __2__ is dead.\u201d",],
    afterPart: "",
    choices: {
      a: "1 = Christianity, 2 = Judaism",
      b: "1 = Judaism, 2 = Christianity",
      c: "1 = Belief, 2 = Grace",
      d: "1 = the Law, 2 = Grace",
      e: "1 = Faith, 2 = Works",
      f: "1 = a judge, 2 = a jury",
    },
    answer: "e",
  },
  {  // 23
    category: "PAUL",
    beforePart: "Choose the word or phrase that completes this scripture from the book of Hebrews (NIV):",
    quotePart: ["Now _____ is confidence in what we hope for and assurance about what we do not see. This is what the ancients were commended for.", "By _____ we understand that the universe was formed at God\u2019s command, so that what is seen was not made out of what was visible.", "By _____ Abel brought God a better offering than Cain did. By _____ he was commended as righteous, when God spoke well of his offerings. And by _____ Abel still speaks, even though he is dead.", "By _____ Enoch was taken from this life, so that he did not experience death: \u201cHe could not be found, because God had taken him away.\u201d For before he was taken, he was commended as one who pleased God. And without _____ it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.", "By _____ Noah, when warned about things not yet seen, in holy fear built an ark to save his family. By his _____ he condemned the world and became heir of the righteousness that is in keeping with _____."],
    afterPart: "",
    choices: {
      a: "belief",
      b: "divine knowledge",
      c: "experience",
      d: "faith",
      e: "grace",
      f: "karma",
      g: "revelation",
      h: "science",
      i: "wisdom",
    },
    answer: "d",
  },
  {  // 24
    category: "PAUL",
    beforePart: "In 1 Corinthians (KJV), the apostle Paul speaks about true wisdom to the people in Corinth. Complete the following scripture:",
    quotePart: ["But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, _____.", "But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God."],
    afterPart: "",
    choices: {
      a: "the knowledge of God",
      b: "the riches of Heaven",
      c: "the knowledge of Heaven",
      d: "the things which God hath prepared for them that love him",
      e: "the consequences of global warming",
    },
    answer: "d",
  },
  {  // 25
    category: "PAUL",
    beforePart: "Choose the correct saying from the apostle Paul in his first letter to Timothy (NIV):",
    quotePart: ["",],
    afterPart: "",
    choices: {
      a: "\u201cFor there are many mediators between God and man, Jesus, the apostles, the Popes, the priests, and a believer\u2019s parents \u2014 all who teach the believer to follow Christ.\u201d",
      b: "\u201cFor there are only two mediators between God and mankind, Jesus and whoever brings a non-believer to faith in Jesus.\u201d",
      c: "\u201cFor there are only two mediators between God and a person, Jesus and a man\u2019s parents, both of whom give life to a man.\u201d",
      d: "\u201cFor there is one God and one mediator between God and mankind, the man Christ Jesus, who gave himself as a ransom for all people.\u201d",
      e: "\u201cFor there are many mediators, scholars of the law, who only get paid if you get to Heaven.\u201d",
    },
    answer: "d",
  },
  {  // 26
    category: "PAUL",
    beforePart: "In his letter to the Romans, the apostle Paul tells the Gentiles they have been accepted by God in place of the Jews who did not believe. Choose the proper words to complete the Scripture (NAB):",
    quotePart: ["For if God did not spare the natural branches, [perhaps] he will not spare you either. See, then, the __1__ and __2__ of God: __2__ toward those who fell, but God\u2019s __1__ to you, provided you remain in his __1__; otherwise you too will be cut off. And they also, if they do not remain in unbelief, will be grafted in, for God is able to graft them in again.",],
    afterPart: "",
    choices: {
      a: "1 = kindness, 2 = severity",
      b: "1 = grace, 2 = forgiveness",
      c: "1 = grace, 2 = faithfulness",
      d: "1 = water, 2 = fertilizer",
      e: "1 = fire, 2 = water",
    },
    answer: "a",
  },
  {  // 27
    category: "PAUL",
    hellTheme: true,
    beforePart: "In his first letter to the church at Corinth, the apostle Paul lists some of the things that exclude a person from the kingdom of God. Complete the following scripture (NAB):",
    quotePart: ["\u201cDo you not know that the unjust will not inherit the kingdom of God? Do not be deceived; neither _____ will inherit the kingdom of God. That is what some of you used to be; but now you have had yourselves washed, you were justified in the name of the Lord Jesus Christ and in the Spirit of our God.\u201d",],
    afterPart: "",
    choices: {
      a: "the self-righteous or hypocritical or Pharisee",
      b: "fornicators nor idolaters nor adulterers nor boy prostitutes nor sodomites nor thieves nor the greedy nor drunkards nor slanderers nor robbers",
      c: "unbelievers or the un-saved",
      d: "Jews nor Muslims nor Pagans nor unbelievers",
      e: "racists nor homophobes",
    },
    answer: "b",
  },
  {  // 28
    category: "PAUL",
    beforePart: "True or False: The apostle Paul made ALL of the following statements about salvation (Heaven) in his letters:",
    quotePart: ["\u201c...for if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.\u201d", "\u201cFor by grace you have been saved through faith, and this is not from you; it is the gift of God; it is not from works, so no one may boast.\u201d", "\u201cBy your stubbornness and impenitent heart, you are storing up wrath for yourself for the day of wrath and revelation of the just judgment of God, who will repay everyone according to his works: eternal life to those who seek glory, honor, and immortality through perseverance in good works, but wrath and fury to those who selfishly disobey the truth and obey wickedness.\u201d", "\u201cNow the works of the flesh are obvious: immortality, impurity, licentiousness, idolatry, sorcery, hatreds, rivalry, jealousy, outbursts of fury, acts of selfishness, dissensions, factions, occasions of envy, drinking bouts, orgies, and the like. I warn you, as I warned you before, that those who do such things will not inherit the kingdom of God.\u201d"],
    afterPart: "",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },
  {  // 29
    category: "PARABLES",
    beforePart: "Complete Jesus\u2019 parable of the mustard seed in the Gospel of Matthew (NAB):",
    quotePart: ["He proposed another parable to them. \u201cThe kingdom of heaven is like a mustard seed that a person took and sowed in a field. It _____.\u201d",],
    afterPart: "",
    choices: {
      a: "is the plant that yields the highest crop",
      b: "is the hardest plant to grow but produces the most valuable of spices",
      c: "is the smallest of all the seeds, yet when full-grown it is the largest of plants",
      d: "always grows peacefully with other types of plants, regardless of what types of plants are around it",
      e: "crowds out and replaces other plants",
      f: "is good with two pickles on chicken and bread",
    },
    answer: "c",
  },
  {  // 30
    category: "PARABLES",
    hellTheme: true,
    beforePart: "Complete the following parable from Jesus in the Gospel of Matthew (NIV):",
    quotePart: ["\u201cOnce again, the kingdom of heaven is like a net that was let down into the lake and caught all kinds of fish. When it was full, the fishermen pulled it up on the shore. Then they sat down and collected the good fish in baskets, but threw the bad away. This is how it will be at the end of the age. The angels will come and separate the _____ and throw them into the blazing furnace, where there will be weeping and gnashing of teeth.\u201d",],
    afterPart: "",
    choices: {
      a: "non-believers from the believers",
      b: "Jews from the Christians",
      c: "unsaved from the saved",
      d: "wicked from the righteous",
      e: "murderers from the peaceful",
      f: "climate deniers from the normal people",
      g: "Jesus did not say this, but corrected one of His followers who did.",
    },
    answer: "wicked from the righteous",
  },
  {  // 31
    category: "PARABLES",
    beforePart: "Read the following parable from Jesus in the Gospel of Luke (NAB):",
    quotePart: ["\u201cTwo men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee stood by himself and prayed: \u2018God, I thank you that I am not like other people\u2014robbers, evildoers, adulterers\u2014or even like this tax collector. I fast twice a week and give a tenth of all I get.\u2019", "\u201cBut the tax collector stood at a distance. He would not even look up to heaven, but beat his breast and said, \u2018God, have mercy on me, a sinner.\u2019\u201d"],
    afterPart: "Which of the two went home justified?",
    choices: {
      a: "Only the Pharisee because he fasted and did not rob, do evil, or commit adultery \u2014 whereas the tax collector even admitted that he was a sinner.",
      b: "Only the tax collector because he humbled himself whereas the Pharisee exalted himself.",
      c: "Both the Pharisee and the tax collector because both prayed to God in their own way.",
      d: "Neither the Pharisee nor the tax collector because each of them was flawed in different ways.",
      e: "The Scripture does not say because Jesus wanted the audience to ponder his larger message without telling them the answer.",
    },
    answer: "b",
  },
  {  // 32
    category: "PARABLES",
    hellTheme: true,
    beforePart: "Match the items in the parable below to who or what Jesus said they are in real life (NAB):",
    quotePart: ["He proposed another parable to them. \u201cThe kingdom of heaven may be likened to a man who sowed good seed in his field. While everyone was asleep his enemy came and sowed weeds all through the wheat, and then went off. When the crop grew and bore fruit, the weeds appeared as well. The slaves of the householder came to him and said, \u2018Master, did you not sow good seed in your field? Where have the weeds come from?\u2019 He answered, \u2018An enemy has done this.\u2019 His slaves said to him, \u2018Do you want us to go and pull them up?\u2019 He replied, \u2018No, if you pull up the weeds you might uproot the wheat along with them. Let them grow together until harvest; then at harvest I will say to the harvesters, \u2018First collect the weeds and tie them in bundles for burning; but gather the wheat into my barn.\u2019\u2019\u201d",],
    afterPart: "The field represents (the) _____ and the weeds represent (the) _____.",
    choices: {
      a: "Church / Pharisees",
      b: "Believers / Non-believers",
      c: "World / Evildoers",
      d: "Jews / Pagans",
      e: "Christians / Demons",
      f: "Wheat / Chaff",
    },
    answer: "c",
  },
  {  // 33
    category: "PARABLES",
    beforePart: "In the following parable from the Gospel of Matthew (NAB), Jesus compares sinners to stray sheep. Choose the proper ending.",
    quotePart: ["\u201cWhat is your opinion? If a man has a hundred sheep and one of them goes astray, will he not leave the ninety-nine in the hills and go in search of the stray? And if he finds it, amen, I say to you, _____.\u201d",],
    afterPart: "",
    choices: {
      a: "that sheep will be dinner",
      b: "that sheep will be branded with a \u20186 6 6\u2019",
      c: "that sheep will be taken back to the flock and considered a black sheep from that day on",
      d: "he will remove it from the flock",
      e: "he rejoices more over it than over the ninety-nine that did not stray",
    },
    answer: "e",
  },
];


////////////////////
const userAnswers = [];

let questionNumber = 0;
let currQ = theQuestions[questionNumber];
let prevQ;
let userSelection;
const displayDelay = 0.4;

const container = document.querySelector('.container');
const background = document.querySelector('.background');
////
const card = document.querySelector('.card');
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

  /* Special Rules */  // consider cleaning this into a switch or something
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
  if (questionNumber+1 == 14) {
    qBeforePart.setAttribute('style', 'hyphens: auto; overflow-wrap: break-word')
  } else {
    qBeforePart.removeAttribute('style');
  }
  if (questionNumber+1 == 20) {
    const lastPara = qQuotePart.querySelector('p + p + p');
    lastPara.setAttribute('style', 'padding: 0 38px; text-align: center; white-space: pre-wrap;')  // another solution is a fixed width and margin-left + margin-right of auto
  }
  if (questionNumber+1 == 22 || questionNumber+1 == 26) {  // for questions with convoluted numbered blanks
    qQuotePart.textContent = '';
    question.quotePart.forEach((para) => {
      let paragraph = para;
      const p = document.createElement('p');
      const re= /__\d__/g;
      const numberedBlanks = paragraph.match(re);
      console.log(numberedBlanks);
      if (numberedBlanks) {
        // let lastBlank = 0;
        for (const blank of numberedBlanks) {
          const span = document.createElement('span');
          const number = blank.slice(2, 3);
          span.classList.add('fill-in-the-blank');
          span.textContent = `   ${number}   `;
          const textBeforeBlank = paragraph.slice(0, paragraph.indexOf(blank));
          paragraph = paragraph.slice(paragraph.indexOf(blank) + blank.length);
          // lastBlank = para.indexOf(blank, lastBlank) + blank.length;
          p.append(textBeforeBlank, span);
        }
        const restOfText = paragraph;
        p.append(paragraph);
      }
      qQuotePart.appendChild(p);
    });
  }
  if (questionNumber+1 == 28) {
    const wordToBold = 'ALL';  // rather flexible, too
    qBeforePart.textContent = '';
    const strong = document.createElement('strong');
    strong.textContent = wordToBold;
    textBeforeStrong = question.beforePart.slice(0, question.beforePart.indexOf(wordToBold));
    textAfterStrong = question.beforePart.slice(question.beforePart.indexOf(wordToBold)+wordToBold.length);
    qBeforePart.append(textBeforeStrong, strong, textAfterStrong);
    ////
    const topChoice = answerSelection.querySelector('.choice');  // only one, the first one
    const endChoice = answerSelection.querySelector('.choice + .choice');
    topChoice.setAttribute('style', 'width: 100px; margin-left: auto; margin-right: auto;');
    endChoice.setAttribute('style', 'width: 100px; margin-left: auto; margin-right: auto; margin-top: 20px;');
  }
  if (question.category == 'OLD TESTAMENT' || question.category == 'JOHN THE BAPTIST') {
    header.setAttribute('style', 'width: 280px');
  } else {
    header.removeAttribute('style');
  }
  if (question.hellTheme) {
    card.classList.add('hell');  // for q-banner
    header.classList.add('hell');
    qBeforePart.classList.add('hell');
    qQuotePart.classList.add('hell');
    qAfterPart.classList.add('hell');
    answerSelection.classList.add('hell');  // for choices
    nextBtn.querySelector('img').src = './assets/Quiz/Next-hell.png';  // consider changing to background-image (or better yet make it yourself in the css)
    backBtn.querySelector('img').src = './assets/Quiz/Back-hell.png';
  } else {
    card.classList.remove('hell');
    header.classList.remove('hell');
    qBeforePart.classList.remove('hell');
    qQuotePart.classList.remove('hell');
    qAfterPart.classList.remove('hell');
    answerSelection.classList.remove('hell');
    nextBtn.querySelector('img').src = './assets/Quiz/next.png';
    backBtn.querySelector('img').src = './assets/Quiz/back.png';
  }
}


function fadeElems(delay) {
  function fadeOutIn(domObj) {
    domObj.classList.remove('fade-in');
    domObj.classList.add('fade-out');
    setTimeout(() => {  // async
      domObj.classList.remove('fade-out');
      domObj.classList.add('fade-in');
    }, delay * 1000);
  }

  background.setAttribute('style', 'opacity: 0.5');  // a half-fade
  setTimeout(() => background.setAttribute('style', 'opacity: 1'), delay * 1000);
  ////
  if (prevQ.category !== currQ.category) {
    fadeOutIn(category);
  }
  ////
  // fadeOutIn(progress);  // no fade here
  ////
  fadeOutIn(qBeforePart);  // consider staggering these fades!
  fadeOutIn(qQuotePart);
  fadeOutIn(qAfterPart);
  ////
  const choices = answerSelection.querySelectorAll('.choice');
  fadeOutIn(answerSelection);

  return new Promise((resolve) => {
    setTimeout(resolve, delay * 1000);
  });
}


function setUserAnswer() {
  if (userSelection) {
    userAnswers[questionNumber] = userSelection;
    userSelection = undefined;
    return true;
  }
}


function moveToQuestion(num) {
  window.scrollTo({top: 0, behavior: 'smooth'});
  prevQ = currQ;
  currQ = theQuestions[num];
  userSelection = userAnswers[num];
  fadeElems(displayDelay)
    .then(() => displayContent(theQuestions[num]));
}


function QuizController() {
  // questionNumber = theQuestions.length - 1;
  questionNumber = 1 - 1;
  displayContent(theQuestions[questionNumber]);

  answerSelection.addEventListener('click', (e) => {
    userSelection = (e.target.id) ? e.target.id : undefined;
  });

  nextBtn.addEventListener('click', () => {
    const isAnswered = setUserAnswer();
    if (!isAnswered) if (!confirm('Skip Question?')) return;
    questionNumber++;
    moveToQuestion(questionNumber);
  });

  backBtn.addEventListener('click', () => {
    const isAnswered = setUserAnswer();
    if (!isAnswered) console.log('User went back without answering!');
    questionNumber--;
    moveToQuestion(questionNumber);
  });

  document.addEventListener('keydown', (e) => {  // for devs
    switch (e.key) {
      case ('ArrowRight'):
        setUserAnswer();
        questionNumber++;
        moveToQuestion(questionNumber);
        break;
      case ('ArrowLeft'):
        setUserAnswer();
        questionNumber--;
        moveToQuestion(questionNumber);
        break;
    }
  });
}


QuizController();
