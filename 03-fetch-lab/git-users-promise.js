
function init() {
    const resultsElem = document.getElementById('results');
    console.log("Document loaded");
    fetch("users.json")
        .then(usersResp => usersResp.json())
        .then(users => Promise.all(users.map(user =>
            fetch(`https://api.github.com/users/${user.username}`)
                .then(gitUsersResp => gitUsersResp.json())))
        )
        .then(gitUsers => {
            console.log(gitUsers);
            return gitUsers.map(gitUser => {
                const img = new Image();
                img.src = gitUser.avatar_url;
                resultsElem.appendChild(img);
                return img;
            })
        }).then(images => console.log(images))
        .catch(err => console.log(`Error:`, err))
}

window.addEventListener('load', init);