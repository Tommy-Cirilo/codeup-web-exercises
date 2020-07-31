const myPromise = fetch('https://api.github.com/users/tommy-cirilo/events/public', {headers: {"Authorization": `gitHubApiKey`}});



myPromise.then(response => console.log(response.json().then(function (data) {
    console.log(data);







})));
myPromise.catch(error => console.error(error)); 




