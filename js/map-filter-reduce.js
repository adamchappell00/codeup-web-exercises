const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Exercise Part 2
const versatile = users.filter(user => user.languages.length >= 3)
const versatileNames = versatile.map(user => user.name)
// Exercise Part 3
const emails = users.map(user => user.email)
// Exercise Part 4
const totalExperience = users.reduce((totalYears, user) => {return totalYears + user.yearsOfExperience},0);
const avgExperience = totalExperience/users.length;
// Exercise Part 5
const getLongest = () => {
    let longestLength = 0;
    let longestEmail = users.reduce((longestMail, user) => {
        if(user.email.length > longestLength){
            longestMail = user.email;
            longestLength = user.email.length;
        }
        return longestMail;
    }, 0);
    return longestEmail;
}
// Exercise Part 6
const instructorNames = users.reduce((allNames, user ) => {return allNames + user.name + ' '},'');

// Add to HTML
let mapFilterReduce = `Filter by 3 Languages: ${versatileNames}`
    mapFilterReduce += '<br>'+`List of Emails: ${emails}`;
    mapFilterReduce += '<br>'+`Total Experience: ${totalExperience}, Average Experience: ${avgExperience}`;
    mapFilterReduce += '<br>'+`The longest user email is: ${getLongest()}`;
    mapFilterReduce += '<br>'+`Your Instructors are: ${instructorNames}`;
$('#map-filter-reduce').html(mapFilterReduce);