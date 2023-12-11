let btn = document.getElementById('button');
let reset = document.getElementById('reset');
let div = document.getElementById('container');
div.classList.add('post');
let fragment = new DocumentFragment();
let theId = 1;

function getInfo() {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})
.then(function (doer) {
    return doer.json();
})
.then(function (datum) {
    datum.forEach(post => {
        div.innerText = '';
        let h3 = document.createElement('h3');
        if (theId === post.id) {
        h3.innerText = post.id; 
        let h2 = document.createElement('h2');
        h2.innerHTML = post.title;
        fragment.appendChild(h3);
        fragment.appendChild(h2); 
        } if (theId > 20) {
            theId = 1;
            getInfo();
        }
    })
    div.appendChild(fragment);
})
.catch(function (error) {
    console.log('Error');
})
}

btn.addEventListener('click', () => {
    theId++;
    getInfo();
})

reset.addEventListener('click', () => {
    theId = 1;
    getInfo();
})

getInfo();