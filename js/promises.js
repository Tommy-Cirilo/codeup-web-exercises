const myPromise = fetch('https://api.github.com/users/tommy-cirilo/events/public', {headers: {"Authorization": `gitHubApiKey`}});

/*Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of
the last commit that user made. Reference the github api documentation to achieve this*/

myPromise.then(response => console.log(response.json()
    .then(function (data) {
    console.log(data);
    console.log(data[0].actor.login); //brings back username
    console.log(data[0].created_at)   // brings back time
})));


/*  Instructor Example


const lastDateOfCommit = username => {

return fetch("https://api.github.com/users/${username}/events/public", {headers: {'Authorization' : `token ${gitHubKey}`}})
.then(response => resp.json()).then(data => console.log(data.created_at));
        for (let datum of data) {
        if (datum.type === "PushEvent") {
            date = datum.created_at;
            break;
        }
        }
        return date;
}).then(date => document.getElementsByTagName("body"[0].innerText = date);

document.getElementsByTagName("body"[0].innerText = date);


*
* */





myPromise.catch(error => console.error(error)); 




/*
* Create Your Own Promise
Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the
* passed number of milliseconds.


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
*
1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message
* more dynamic.
* */




/*
    const wait = (time) => {
        new Promise(resolve => setTimeOut(() => {
        resolve(`you will see this message after ${time}`)
        }
        ));

        wait(1200).then(() => console.log("you will see this after 1200 milliseconds"));
    }

* */



