let toWatchList = document.getElementById('to-watch-list')
let input = document.getElementById('new-show-title')
let form = document.getElementById('form')

const getShow = async (str) => {
    let req = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${str}`)
    let res = await req.json()
    // console.log('Res:', res)
    input.value = ""
    return res
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    // console.log('submitted!')
    let showName = document.createElement('h3')
    let img = document.createElement('img')
    let showSummary = document.createElement('p')
    let showGenre = document.createElement('p')
    let showType = document.createElement('p')
    let hiddenDiv = document.createElement('div')
    let showCard = document.createElement('div')
        showCard.setAttribute("id", "showCard")
    let leftDiv = document.createElement('div')
        leftDiv.className = "leftDiv"
    let rightDiv = document.createElement('div')
        rightDiv.className = "rightDiv"
    let invisibleDiv = document.createElement('div')
        invisibleDiv.className = "invisibleDiv"
    let data = await getShow(input.value)
    let box = document.getElementById('box')
    box.append(showCard)

    hiddenDiv.className = 'hidden'
    hiddenDiv.classList.add = "hiddenDiv"
    hiddenDiv.innerHTML = data.summary
    showSummary.textContent = data.summary
    
    showName.innerText = data.name
    showType.innerText = (data.type)
    showGenre.innerText = data.genres
    
    img.src = data.image.medium
    img.style.height = '150px'
    
    rightDiv.append(showName)
    rightDiv.append(showType)
    rightDiv.append(showGenre)
    
    // Delete Button
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.className = "deleteBtn"
    deleteBtn.addEventListener('click', () => {
         showCard.remove()
    })
    leftDiv.append(deleteBtn)
    leftDiv.append(img)

    showCard.append(leftDiv)
    showCard.append(rightDiv)
    showCard.append(invisibleDiv)


    
    // li.textContent = data.name
    // if (data.genres = "") {
    //         genre.textContent = "Genre: ??"
    //     } else {
            // genre.textContent = (' Genre: ' + data.genres)
            // }
            
    
    
    // Add image to Watchlist items
    // li.prepend(img)
    
    // toWatchList.append(li)
    // li.append(hiddenDiv)
    // li.append(genre)
    
    
    // Click Image to Toggle Summary
    img.addEventListener('click', () => {
        hiddenDiv.classList.toggle('hidden')
        hiddenDiv.style.position = "absolute"
        hiddenDiv.style.float = "right"
        invisibleDiv.append(hiddenDiv)
        // hiddenDiv.style.float = "right"
    })
})





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