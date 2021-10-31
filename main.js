const linkSocialMedia = { //Thi
    github: 'Amandakellen',
    instagram: 'amandinha.kellen',
    linkedin: 'in/amanda-kellen',
    email: 'amanda_mail'

}

function changeSocialMedia() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`

    }
}

function getGitHubProfileinfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github} `

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

changeSocialMedia()
getGitHubProfileinfos()
