
async function init() {
    const resultsElem = document.getElementById('results');
    try {
        const usersResp = await fetch("users.json")
        const users = await usersResp.json()
        const gitUsers = await Promise.all(users.map(
            async user => {
                const gitUsersResp = await fetch(`https://api.github.com/users/${user.username}`);
                return gitUsersResp.json()
            })
        )
        console.log(gitUsers);
        const images = gitUsers.map(gitUser => {
            const img = new Image();
            img.src = gitUser.avatar_url;
            resultsElem.appendChild(img);
            return img;
        })
        console.log(images)
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 5000)
        })
        images.forEach(img => img.remove())
    }
    catch (err) {
        console.log(`Error:`, err)
    }
}

window.addEventListener('load', init);