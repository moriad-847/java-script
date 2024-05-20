var cartona = '';
var quotes = [`"Resentment is like drinking poison and waiting for your enemies to die."

--Nelson Mandela`, `"It's not what happens to you, but how you react to it that matters."

--Epictetus`, `"You miss 100% of the shots you don't take."

--Wayne Gretzy`,
    `"Do not take life too seriously. You will not get out alive."

--Elbert Hubbard`,
    `"It's not what happens to you, but how you react to it that matters."

--Epictetus`]

function displayQuotes() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomString = quotes[randomIndex];

    document.getElementById('quote').innerHTML = `<h2> ${randomString} </h2>`;
}
