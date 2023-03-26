import { useState, useEffect } from 'react'


import './App.css'

function App() {
  const [menu, setMenu] = useState()
 const [url, setUrl] = useState('http://localhost:3000/menu')
useEffect(()=>{
  const request = async (link) =>{
    const req = await fetch(link)
    const data = await req.json()
    setMenu(data)
  }
  request(url)
}, [url])
   console.log(menu)
 
  return (
    <div className="App">
    <section className='menu'>
      <div className="title">
        <h2>Our menu</h2>
        <div className="title underline"></div>
      </div>
    </section>
    <div className="btn-container">
    <button onClick={()=> setUrl('http://localhost:3000/menu')} className="btn">
        All
      </button>
      <button onClick={()=> setUrl('http://localhost:3000/menu?category=breakfast')} className="btn">
        Breakfast
      </button>
      <button onClick={()=> setUrl('http://localhost:3000/menu?category=lunch')} className="btn">
    lunch
      </button>
      <button onClick={()=> setUrl('http://localhost:3000/menu?category=shakes')} className="btn">
      shakes
      </button>
      
    </div>
      
     
        
    {menu && menu.map((trip)=>{
      return (
        <div className='section-center' key={trip.id}>
          <article className='menu-item'>
          <img className='img' src={trip.img} alt="" />
          <div className="item-info">
            <header>
            <h5>{trip.title}</h5>
            <span className='item-price'>
            {trip.price}
            </span>
            </header>
            <div className="item-text">
            {trip.desc}
            </div>
          </div>
          </article>
        </div>
      )
    })}
    
    </div>
  )
}

export default App
