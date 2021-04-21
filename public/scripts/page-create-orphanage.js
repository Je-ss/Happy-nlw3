//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

// Create and add marker 

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

   // remove icon

    marker && map.removeLayer(marker)

 //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// add  o campo de fotos

function addPhotoField() {

    // pegar o container de fotos #images

    const container = document.querySelector('#images');

    // pegar o container para duplucar .new-image

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da Ultima imagem add

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)



    // verificar se o campo esta vazio se sim , não add 

    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }



    // limpar camopo antes de add 

    input.value = ""

    // add o clone ao container de #images

    container.appendChild(newFieldContainer)
}


    
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {

        // limpar valor do campo
        span.parentNode.children[0].value = ""
        return 
    }
// deletando campo
    span.parentNode.remove()
}


// select yes or no 

function toggleSelect(event) {

    // retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))



    // colocar a class .active  no botão clicado
    const button = event.currentTarget
    button.classList.add('active')


    //atualizar o meu input hidden com o valor selecionado 

    const input = document.querySelector('[name="open_on_weekends"]')


    // verificar se sim ou não 
    input.value = button.dataset.value
}