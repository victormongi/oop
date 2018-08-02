import _ from 'lodash'
import axios from 'axios'

// let dragons = [
//   {name: 'flufykins', element: 'lighting'},
//   {name: 'naomi', element: 'lighting'},
//   {name: 'karo', element: 'fire'},
//   {name: 'david', element: 'timewrap'},
// ]

// let hasElement = _.curry((element, obj) => obj.element === element)

// let lightingDragons = dragons.filter(hasElement('fire'))

// console.log(lightingDragons)

async function getPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.data)
    .catch(error => error)
    return response
}

// const result = getPosts()
// result

const fetch = require('node-fetch')

function fetchAvatarUrl(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  .then(response => response.json())
  .then(data => data.imageUrl)
}

const result = fetchAvatarUrl(122)
