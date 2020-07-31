const myPromise = fetch('https://api.github.com/users/tommy-cirilo/events/public', {headers: {"Authorization": `gitHubApiKey`}});



myPromise.then(response => console.log(response.json()
    .then(function (data) {
    console.log(data);


    console.log(data[0].actor.login);

    console.log(data[0].created_at)
/*
    function user(username) {
        console.log(data[0].created_at)
    }*/

    // user(Tommy-Cirilo);
})));





myPromise.catch(error => console.error(error)); 




