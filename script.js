const jokeEl=document.getElementById('joke')
const jokeBtn= document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generatejoke)

generatejoke()

async function generatejoke() {
    const config={
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }
    const res= await fetch('https://icanhazdadjoke.com',config)
    const data= await res.json()
        jokeEl.innerHTML=data.joke
    
}