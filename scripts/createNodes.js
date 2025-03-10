const test = ['btn', 'mx-5']

function createDiv(classList) {
    let div = document.createElement("div")
    if (classList) {
        if (Array.isArray(classList)) {
            for (let i = 0; i < classList.length; i++) {
                div.classList.add(classList[i])
            }
        }
    }
    console.log(div.classList.value)
}

createDiv(test)

function createCards(imageSource) {
    let card = document.createElement("div")
    card.style.add("width: 18rem")
    image = document.createElement("img")
    image.src = imageSource
    card.appendChild()
}

<div class="card " style="width: 18rem">
<img src="https://picsum.photos/120/120" class="card-img-top" alt="..." />
<div class="card-body">
    <h3 class="card-title">Titre 1</h3>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident.</p>
</div>
</div>