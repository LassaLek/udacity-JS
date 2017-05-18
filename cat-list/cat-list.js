/**
 * Created by lassal on 18.5.17.
 */
class Cat {


    constructor(name) {
        this.name = name;
        this.imageSrc = 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg';
        this.counter = 0;
    }

    createCatElement() {


        let div = document.createElement("DIV");
        let t = document.createTextNode(this.name);
        div.appendChild(t);


        document.body.appendChild(div);
        div.addEventListener('click', () => {
            let img = document.getElementById('current');
            let clone = img.cloneNode();
            img.parentNode.replaceChild(clone, img);

            let name = document.getElementById('name');
            let elem = document.getElementById('counter');

            name.innerHTML = this.name;
            elem.innerHTML = this.counter;
            console.log(this);

            clone.src = this.imageSrc;

            clone.addEventListener('click', () => {

                elem.innerHTML = ++this.counter;
            }, false);

        }, false);
    }
}

function createCats() {
    for (let i = 0; i < 5; i++) {
            let cat = new Cat('kocka' + i);
            cat.createCatElement();
    }
}


createCats();



