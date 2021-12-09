
let userName = 'adamchappell00';
const myLastPush = (user)=> fetch(`https://api.github.com/users/${user}/events`,
    {headers: {'Authorization': 'GITHUB_KEY'}})
    .then(resp => resp.json());
//    .then(resp => {resp.filter(event => event.type === 'push')});
console.log(myLastPush(userName));
 //   .then()