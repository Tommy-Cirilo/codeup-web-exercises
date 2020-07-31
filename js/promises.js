const myPromise = fetch('https://api.github.com/users/tommy-cirilo/events/public', {headers: {"Authorization": `gitHubApiKey`}});

/*Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of
the last commit that user made. Reference the github api documentation to achieve this*/

myPromise.then(response => console.log(response.json()
    .then(function (data) {
    console.log(data);
    console.log(data[0].actor.login); //brings back username
    console.log(data[0].created_at)   // brings back time
})));








myPromise.catch(error => console.error(error)); 




