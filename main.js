//const { default: axios } = require("axios")



function buttClick(event) {
 event.preventDefault()

 axios.get("https://swapi.dev/api/planets/2")
 .then(res => {
     const { residents } = res.data
     

     residents.forEach(url => {
         axios.get(url)
         .then(res => {
             console.log(res.data)

             let person = document.createElement('h2')
             person.textContent = res.data.name

             document.querySelector('#resident-display').appendChild(person)
         })
     });
 })
 
}

document.getElementById("get-resi").addEventListener('click', buttClick)