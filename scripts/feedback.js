const btnCancel = document.querySelector('.cancel');
const btnSend = document.querySelector('.send');

const prev_page = localStorage.getItem('prev-page');
const referrer = prev_page ? prev_page : 'about';
localStorage.clear();

btnCancel.addEventListener('click', () => {
  window.location.href = `./${referrer}.html`;
});

btnSend.addEventListener('click', () => {
  const loader = document.querySelector('.loader');
  loader.setAttribute('style', 'display: block');
  ////
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  ////
  if (!message) return;
  ////
  const title = `Feedback from user ${name}`;  // consider putting user's ip there, too?
  const content = `FROM: ${name}\n\nEMAIL: ${email}\n\nMESSAGE: ${message}`;
  ////
  emailjs.init({publicKey: '976s8VSowS8o2DZad'});
  emailjs.send("service_6eqxq1m", "template_97u8rsl", {title, content})
    .then(() => {
      alert('Message sent!');
      window.location.href = `./${referrer}.html`;  // consider changing to confirm() to say `...return to ${referrer} page?`
    }, (error) => {
      console.log(error);
      alert('There was an error sending your message. Please try again later.');
    });
});
