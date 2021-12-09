
// Exstablish Username: Allow for later feature of updating or entering in a user
let userName = 'adamchappell00';

// Establish the function with fetch/key
const userLastPush = (user) => fetch(`https://api.github.com/users/${user}/events`,
    {headers: {'Authorization': 'GITHUB_KEY'}})
    // Take the result into an object, find all of the Push Events
    .then(resp => resp.json())
    .then(events => events.filter((event) => event.type === 'PushEvent'))
    // Log the data+time of the most recent push (index of 0)
    .then(pushes => console.log(pushes[0].created_at));
//call the function
userLastPush(userName);

// Part 2
let setTime;
const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTime = time;
            resolve();
        }, time);
    });
}
wait(1000).then(() => console.log(`You'll see this after ${setTime} milliseconds`));
wait(3000).then(() => console.log(`You'll see this after ${setTime} milliseconds`));
