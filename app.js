const searchProfile = () => {
    const username = document.getElementById('searchInput').value;

    if (username.trim() !== '') {
        fetch(`https://api.github.com/users/${username}`)
            .then(resposta => resposta.json())
            .then(profile => {
                updateProfile(profile);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    } else {
        alert('Por favor, insira um nome de usuário do GitHub para pesquisar.');
    }
}

const updateProfile = (profile) => {
    const login = document.getElementById('login');
    const name = document.getElementById('name');
    const bio = document.getElementById('bio');
    const repositorio = document.getElementById('repositorio');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const imagem = document.getElementById('imagem');

    login.textContent = `@${profile.login}`;
    name.textContent = profile.name;
    bio.textContent = profile.bio;
    repositorio.textContent = profile.public_repos;
    followers.textContent = profile.followers;
    following.textContent = profile.following;
    imagem.style.backgroundImage = `url(${profile.avatar_url})`;
}