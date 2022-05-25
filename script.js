const jokeEl = document.getElementById('joke')
const jokeFetchBtn = document.getElementById('jokeFetchBtn')
const jokeAsyncBtn = document.getElementById('jokeAsyncBtn')

jokeFetchBtn.addEventListener('click', generateJokeFetch)
jokeAsyncBtn.addEventListener('click', generateJokeAsync)

generateJokeFetch();
generateJokeAsync()

async function generateJokeAsync() {
    const config = {
        headers: {
            Accept: 'application/json',              
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke    
}

 function generateJokeFetch() {
     const config = {
         headers: {
             Accept: 'application/json',              
         },
     }

     fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
 }

 //
 jokeFetchBtn.addEventListener("mouseover", function() {
    this.textContent = "Using Fetch to get another joke";
  })
  jokeFetchBtn.addEventListener("mouseout", function() {
    this.textContent = "Get another joke";
  })

  jokeAsyncBtn.addEventListener("mouseover", function() {
    this.textContent = "Using Async to get another joke";
  })
  jokeAsyncBtn.addEventListener("mouseout", function() {
    this.textContent = "Get another joke";
  })
