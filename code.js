// const h1Value = document.querySelector("h1");
// console.log(h1Value.innerHTML);
// h1Value.innerHTML += " This value was added in the DOM";

// document.getElementById()
// document.getElementsByClassName()

console.log(document)


const myButton = document.querySelector(".btn");
const username = document.querySelector(".username");
const message = document.querySelector(".message");

// alert(myButton);

myButton.addEventListener('click', function() {

    if (username.value.length > 0 ) {
        message.innerText = 'Hello, ' + username.value;
        username.value = '';
    }
    else {
        message.innerText = 'Please enter a name';
    }

});
