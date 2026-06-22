const APIURL = 'https://api.github.com/users/';

const mainContent = document.getElementById('main-content');
const form = document.getElementById('search-form');
const search = document.getElementById('search');

async function userGetFunction(username) {
    try {
        const { data } = await axios.get(APIURL + username);
        userCard(data);
        repoGetFunction(username);
    } catch (err) {
        if (err.response && err.response.status === 404) {
            createErrorCard('No profile found with this username');
        } else {
            createErrorCard('Problem fetching profile data');
        }
    }
}

async function repoGetFunction(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created');
        repoCardFunction(data);
    } catch (err) {
        createErrorCard('Problem fetching repositories');
    }
}

function userCard(user) {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name || user.login}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userID}</h2>
                <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
                ${userBio}
                
                <ul class="stats">
                    <li><strong>${user.followers}</strong> <span>Followers</span></li>
                    <li><strong>${user.following}</strong> <span>Following</span></li>
                    <li><strong>${user.public_repos}</strong> <span>Repos</span></li>
                </ul>

                <div id="repos" class="repos"></div>
            </div>
        </div>
    `;
    mainContent.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="error-card">
            <h2>${msg}</h2>
        </div>
    `;
    mainContent.innerHTML = cardHTML;
}

function repoCardFunction(repos) {
    const reposEl = document.getElementById('repos');
    
    if(!reposEl) return;

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo-link');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        userGetFunction(user);
        search.value = '';
    }
});
