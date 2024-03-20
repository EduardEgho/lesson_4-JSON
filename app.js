const urlPhotoUser = 'https://yandex.ru/images/search?source=qa&text=Джейсон+Стэтхэм+фото&pos=15&noreask=1&rpt=simage&nomisspell=1&img_url=https%3A%2F%2Fscontent-arn2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F36858260_1615538415222802_8936781629540532224_n.jpg%3F_nc_ht%3Dscontent-arn2-1.cdninstagram.com%26_nc_cat%3D110%26_nc_ohc%3D6hEhbUDA7NwAX9NNURe%26oh%3D8a84f1d14dfda7bb58b04a3fe2d5a1a0%26oe%3D5E998EB5&lr=213'

const personsBlock = document.querySelector('.persons')

const request = new XMLHttpRequest()
request.open("GET", "persons.json")
request.setRequestHeader("Content-type", "application/json")
request.send()

request.addEventListener('load', () => {
    const data = JSON.parse(request.response)
    // document.querySelector('.name').innerHTML = data.name
    // document.querySelector('.age').innerHTML = data.age

data.forEach((person) => {
    const personsCard = document.createElement('div')
    personsCard.setAttribute('class','person_card')
    personsCard.innerHTML = `
      <div class="person_photo">
        <img src="${person.photo}" alt="${person.name}">      
      </div>
      <h3>${person.name}</h3>
      <span>age: ${person.age}</span>
    `

    personsBlock.append(personsCard)
    console.log(data)

})
} )