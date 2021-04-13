console.log('Here are all the available people:', people);

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function () {
    for (let i= 0; i < people.length; i++) {
        $('body').append(`<div><img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></div>`);
    }
  });
