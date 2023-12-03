import React from 'react'

const HomePage = () => {
  return (
    <div className="text-center">
        <h1 className="pt-5">Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
        <p> El lugar de los pasteles felices</p>
        <img src='public/img/cake.png' alt="cake"style={{ width: '100px', height: '100px' }}></img>
    </div>
  )
}

export default HomePage