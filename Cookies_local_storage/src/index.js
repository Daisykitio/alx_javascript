function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(paragraph);
}

