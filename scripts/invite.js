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
const btnInvite = document.querySelector('.invite');

const prev_page = localStorage.getItem('prev-page');
const referrer = prev_page ? prev_page : 'about';

const score = localStorage.getItem('score');
if (score) document.querySelector('[for="include-score"]').append(`(${score})`);
else document.getElementById('include-score').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Take the test to include your score!');
})

btnCancel.addEventListener('click', () => {
  window.location.href = `./${referrer}.html`;
});

btnInvite.addEventListener('click', () => {
  const friendsEmail = document.getElementById('friends-email').value;
  const yourName = document.getElementById('your-name').value;
  const includeScore = document.getElementById('include-score').checked;
  const message = document.getElementById('message').value;
  console.log({friendsEmail, yourName, includeScore, message});
  ////
  if (!friendsEmail) return;
  ////
  const loader = document.createElement('span');
  loader.classList.add('loader');
  document.querySelector('.buttons').appendChild(loader);
  ////
  let toEmail = friendsEmail;
  let title = (yourName)
    ? `${yourName} invited you to take the Heaven IQ Test`
    : "You are invited to take the Heaven IQ Test";
  const isInvite = true;
  const contentArr = [];
  if (yourName) contentArr.push(`Friend's Name: ${yourName}\n`);
  if (includeScore) contentArr.push(`Friend's Score: ${score}\n`);
  if (message) contentArr.push(`Friend's Message: ${message}\n`);
  const content = contentArr.join('');
  ////
  emailjs.init({publicKey: '976s8VSowS8o2DZad'});
  /* An email for invitee, and an email for us */
  const inviteeEmail = emailjs.send("service_6eqxq1m", "template_97u8rsl", {toEmail, title, isInvite, content});
  const notForUser = true;
  const location = `(${userInfo.ip}) ${userInfo.city}, ${userInfo.region}`;
  title = `Invite Friend sent by user (${userInfo.city}) to ${toEmail}`;
  toEmail = 'feedback@heaveniqtest.com';
  const trackerEmail = emailjs.send("service_6eqxq1m", "template_97u8rsl", {notForUser, location, toEmail, title, isInvite, content,});
  Promise.all([inviteeEmail, trackerEmail])
    .then(() => {
      loader.remove();
      setTimeout(() => {  // to prevent alert from happening first (for some reason)
        alert('Invitation sent!');
        window.location.href = `./${referrer}.html`;  // consider changing to confirm() to say `...return to ${referrer} page?`
      }, 1000);
    }, (error) => {
      console.log(error);
      alert('There was an error sending your message. Please try again later.');
    });
});
