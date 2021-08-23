document.getElementById('add-border').addEventListener('click', function () {
    const addBroder = document.getElementById('friend-container');
    addBroder.style.border = '3px solid red';
});

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'green';
    }
};

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const firendDiv = document.createElement('div');
    firendDiv.classList.add('friend');
    firendDiv.innerHTML = `
                 <h3>friends-1</h3>
                  <p>Lorem, ipsum.</p>
                  `;
    container.appendChild(firendDiv);
})