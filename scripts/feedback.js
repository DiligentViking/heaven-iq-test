let userInfo;
async function getUserInfo() {
  try {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    userInfo = await response.json();
  } catch (error) {
    console.error(error);
  }
}
getUserInfo().then(() => console.log('l received'));

const btnCancel = document.querySelector('.cancel');
const btnSend = document.querySelector('.send');

const prev_page = localStorage.getItem('prev-page');
const referrer = prev_page ? prev_page : 'about';

btnCancel.addEventListener('click', () => {
  window.location.href = `./${referrer}.html`;
});

btnSend.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  ////
  if (!message) return;
  ////
  const loader = document.createElement('span');
  loader.classList.add('loader');
  document.querySelector('.buttons').appendChild(loader);
  ////
  const notForUser = true;
  const location = `(${userInfo.ip}) ${userInfo.city}, ${userInfo.region}`;
  const toEmail = 'feedback@heaveniqtest.com';
  const title = `Feedback from user ${name} (${userInfo.city})`;  // consider putting user's ip there, too?
  const content = `FROM: ${name}\n\nEMAIL: ${email}\n\nMESSAGE: ${message}`;
  ////
  emailjs.init({publicKey: '976s8VSowS8o2DZad'});
  emailjs.send("service_6eqxq1m", "template_97u8rsl", {notForUser, location, toEmail, title, content})
    .then(() => {
      loader.remove();
      setTimeout(() => {  // to prevent alert from happening first (for some reason)
        alert('Message sent!');
        window.location.href = `./${referrer}.html`;  // consider changing to confirm() to say `...return to ${referrer} page?`
      }, 1000);
    }, (error) => {
      console.log(error);
      alert('There was an error sending your message. Please try again later.');
    });
});
