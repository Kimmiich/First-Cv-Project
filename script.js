const githubBox = document.getElementById("githubBox");

//Hämta json fil
fetch("https://api.github.com/users/kimmiich/repos")
.then( response => response.json())
.then(data => {
    console.log(data);
    printRepos(data);
});

//Funktion för att printa ut teams
function printRepos(data) {
    for (repo in data) {
        githubBox.insertAdjacentHTML("beforeend", `<p><a href="${data[repo].clone_url}">${data[repo].name}</a></p>`);
    };

    main.addEventListener("click", function(evt) {
        console.log(evt.target.id);
    });
};