/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
async function user(username){
  try {
    const resp = await axios.get(`https://api.github.com/users/${cammeiners}`);
    const newCard = makeCard(resp.data);
    cardsDiv.appendChild(newCard);
  }
  catch(err) {
    console.log(err);
  }
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const cardsSection = document.querySelector('.cards');
axios.get('https://api.github.com/users/joe-alfaro')
  .then(userData => {
    let followersArray = [];
    axios.get('https://api.github.com/users/joe-alfaro/followers')
      .then(followers => {
        followersArray = followers.data.map(follower => follower.login)

        followersArray.forEach(followerLogin => {
          axios.get(`https://api.github.com/users/${followerLogin}`)
            .then(followerData => {
              cardsSection.appendChild(createCard(followerData.data))
            })
            .catch(error => console.error(error))
        })
      })
      .catch(error => console.error(error))
    cardsSection.appendChild(createCard(userData.data));
  })
  .catch(error => {
    console.error(error)
  })
// const followersArray = [];
// axios.get(`https://api.github.com/users/${myUsername}/followers`)
//       .then(followers => {
//         followersArray = followers.data.map(follower => follower.login)
//         followersArray.forEach(followerLogin => {
//           axios.get(`https://api.github.com/users/${followerLogin}`)
//             .then(followerData => {
//               cardsSection.appendChild(createCard(followerData.data))
//             })
//             .catch(error => console.error(error))
//         })
//       })
//       .catch(error => console.error(error))
//     cardsSection.appendChild(createCard(userData.data));
//   })
//   .catch(error => {
//     console.error(error)
//   })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

*/
function f1 ({user}){
  const cards = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  // const username = document.createElement('p')
  // const location = document.createElement('p')
  // const profile = document.createElement('p')
  // const followers = document.createElement('p')
  // const following = document.createElement('p')
  // const bio = document.createElement('p')
  
// cards.appendChild(img);
// cards.appendChild(cardInfo);
// cards.appendChild(name);
// cards.appendChild(username);
// cards.appendChild(location);
// cards.appendChild(profile);
// cards.appendChild(followers);
// cards.appendChild(following);
// cards.appendChild(bio);

cards.classList.add('card');
img.setAttribute('src', user['avatar_url'])
cardInfo.classList.add('card-info');
name.classList.add('name');
name.textContent = user.name;

const tags = [];
for(let i = 0; i < 6; i++){
  tags.push(document.createElement('p'));
}
//username 
tags[0].classList.add('username');
tags[0].textContent = user.login;
//location
tags[1].textContent = `Location: ${user.location}`;
// profile
tags[2].textContent = `Profile: `;

const a = document.createElement('a');
const aURL = user['html_url'];
a.setAttribute('href', aURL);
a.textContent = aURL;
tags[2].appendChild(a);
tags[3].textContent = `Followers: ${user.followers}`;
tags[4].textContent = `Following: ${user.following}`;
tags[5].textContent = `Bio: ${user.bio}`;
cardInfo.appendChild(h3);
tags.forEach(p => cardInfo.appendChild(p));
card.appendChild(img);
card.appendChild(cardInfo)
return cards;
}
/*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
