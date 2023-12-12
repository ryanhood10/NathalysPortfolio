// Create the button
const button = document.createElement('button');
button.innerText = 'Click for a dad joke!';
button.id = "jokeBtn";
button.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
      .then(response => response.json())
      .then(data => {
        button.style.display = 'none';
        const jokeText = document.createElement('p');
        jokeText.style.width = '100%';
        jokeText.id = "jokeText";
        jokeText.style.wordWrap = 'break-word';
        jokeText.innerText = data.joke;
        document.body.appendChild(jokeText);
      });
});

document.body.appendChild(button);