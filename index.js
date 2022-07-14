let toWatchList = document.getElementById('to-watch-list')
let input = document.getElementById('new-show-title')
let form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    let img = document.createElement('img')
    let data = await getShow(input.value)
    let summary = document.createElement('p')
    let genre = document.createElement('p')
    let hiddenDiv = document.createElement('div')
    
    li.textContent = data.name
    img.src = data.image.medium
    // if (data.genres = "") {
    //         genre.textContent = "Genre: ??"
    //     } else {
            genre.textContent = (' Genre: ' + data.genres)
            // }
            
    hiddenDiv.className = 'hidden'
    hiddenDiv.innerHTML = data.summary
    summary.textContent = data.summary
    
    // Add image to Watchlist items
    li.prepend(img)
    img.style.height = '150px'
    toWatchList.append(li)
    li.append(hiddenDiv)
    li.append(genre)
    
    // Delete Button
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.className = "deleteBtn"
    genre.prepend(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        li.remove()
    })
    
    // Click Image to Toggle Summary
    img.addEventListener('click', () => {
        hiddenDiv.classList.toggle('hidden')
    })
})


const getShow = async (str) => {
    let req = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${str}`)
    let res = await req.json()
    // console.log('Res:', res)
    input.value = ""
    return res
}


// let upBtn = document.createElement('button')
//     upBtn.textContent = '↑'
//     upBtn.className = "upBtn"
//     li.prepend(upBtn)
//     let prev = li.previousElementSibling
//     // let next = li.nextElementSibling
//     upBtn.addEventListener('click', () => {
//         toWatchList.insertBefore(li, prev)
//     // button is wonky. sometimes works, sometimes doesn't. sometimes the unintended li moves
//     })































// Compensating for a faulty API is out of the scope of my capabilities <3

// const tvShows = [] //fill the array with TV show objects -> match the API

// const fillArray = () => {
//     for(let a = 0; a < 1000; a++) {
//         fetch(`https://api.tvmaze.com/shows/${a}`)
//         .then(req => req.json())
//             .then(data => {
//                 if(data["name"] != "Not Found"){
//                     // // console.log('valid')
//                     // const tvShow = {
//                     //     id: data['id'],
//                     //     name: data['name'],
//                     //     genres: data['genres'],
//                     //     runtime: true, // runtime is a boolean. 'true' is 30 minutes, 'false' is 60 minutes
//                     // }
//                     // tvShows.push(tvShow)
//                 }
                
//             })
//     }
//         console.log(tvShows)
// }
// const findShows = document.getElementById("findShows")
// findShows.addEventListener('click', (e) => {
//     // console.log('click')
//     fetch(`https://api.tvmaze.com/shows/${id}`)
//     .then(req => req.json())
//     .then(data => {
//         console.log(data)
//         // data.forEach((show) => {
//         //     console.log(show)
//         // })
//     })
// })
// fillArray()