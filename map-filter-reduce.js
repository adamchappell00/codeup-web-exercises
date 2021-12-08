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
// Exercise Problem 2
const versatile = users.filter(user => user.languages.length >= 3)
const versatileNames = versatile.map(user => user.name)
// Exercise Problem 2
const emails = users.map(user => user.email)
// Exercise Problem 3
const totalExperience = users.reduce((totalYears, user) => {return totalYears + user.yearsOfExperience},0);
const avgExperience = totalExperience/users.length;

let mapFilterReduce = `Filter by 3 Languages: ${versatileNames}`
    mapFilterReduce += '<br>'+`List of Emails: ${emails}`;
    mapFilterReduce += '<br>'+`Total Experience: ${totalExperience}, Average Experience: ${avgExperience}`;
$('#map-filter-reduce').html(mapFilterReduce);