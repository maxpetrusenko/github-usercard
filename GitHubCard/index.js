/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const ax = require('../node_modules/axios/index.js');
var names = ["maxpetrusenko", "ValeriiaMur",'dustinmyers'];

names.forEach((name) => {
  let info = axios.get('https://api.github.com/users/' + name)
  .then(function(response) {
    // console.log(response)
    // console.log(cardMaker(response))
    document.querySelector('.cards').appendChild(cardMaker(response))
    return response
  })
  .catch(function(error){
    console.log(error)
  })
})
// let info = axios.get(['https://api.github.com/users/' + name)
//   .then(function(response) {
//     // console.log(response)
//     // console.log(cardMaker(response))
//     document.querySelector('.cards').appendChild(cardMaker(response))
//     return response
//   })
//   .catch(function(error){
//     console.log(error)
//   })
// console.log(info)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(obj){
  let card = document.createElement('div');
  card.classList.add('card')
  let img = document.createElement('img')
  card.appendChild(img)
  img.setAttribute('src', obj.data.avatar_url)
  let card_info = document.createElement('div')
  card_info.classList.add('card-info')
  card.appendChild(card_info)
  //info
  let h3 = document.createElement('h3')
  h3.classList.add('name')
  card_info.appendChild(h3)
  h3.textContent = obj.data.name;
  let p_user_name = document.createElement('p')
  p_user_name.classList.add('username')
  p_user_name.textContent = obj.data.login;
  card_info.appendChild(p_user_name)
  let p_location = document.createElement('p')
  p_location.textContent = `Location: ${obj.data.location}`
  card_info.appendChild(p_location)
  let p_profile = document.createElement('p')
  p_profile.textContent = `Profile:`
  card_info.appendChild(p_profile)
  let a_profile = document.createElement('a')
  a_profile.setAttribute('href', obj.data.url)
  a_profile.textContent = obj.data.url
  p_profile.appendChild(a_profile)
  let p_followers = document.createElement('p')
  p_followers.textContent = 'Followers: ' + obj.data.followers_url
  card_info.appendChild(p_followers)
  let p_following = document.createElement('p')
  p_following.textContent = 'Following: ' + obj.data.following_url
  card_info.appendChild(p_following)
  let p_bio = document.createElement('p')
  p_bio.textContent = 'Bio: ' + obj.data.bio
  card_info.appendChild(p_bio)


  return card
}
// console.log(cardMaker({data:{avatar_url : "url"}, data:{name : 'Max'}, data:{login :'maxpetrusenko'}}))
// console.log(cardMaker(info))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
