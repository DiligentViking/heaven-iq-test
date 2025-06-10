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
    verses: [
      "\u201cFor God so loved the world that He gave His one and only son, that whoever $believes in him$ shall not perish but have eternal life. For God did not send His Son into the world to condemn the world, but to save the world through Him.\u201d",
    ]
  },
];

//////////

const card = document.querySelector('.card');

function displayAnswers(start, stop) {
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
    tag.textContent = `q${i}`;
    passage.textContent = theAnswers[i-1].passage;
    header.appendChild(tag);
    header.appendChild(passage);

    // Paras
    for (const verse of theAnswers[i-1].verses) {
      const para = document.createElement('p');
      para.textContent = verse;
      paras.appendChild(para);
    }

    section.appendChild(header);
    section.appendChild(paras);

    card.append(section);
  }
}

displayAnswers(1, 1);
