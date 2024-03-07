import React, { useState } from 'react'

const App: React.FunctionComponent = () => {

    const [random, setRandom] = useState(0);
    const colors = [' #f9e79f ', '#d5f5e3', '#ebdef0', '#eaeded'];

    const changeRandom = () => {
        setRandom(Math.floor(Math.random() * colors.length));
    }

    return (
        <>
            <div className='p-5 w-full h-screen flex items-start justify-center sm:items-end border border-black' style={{ backgroundColor: `${colors[random]}` }} >

                <h1 className='absolute sm:top-2 top-[50%] left-[50%] translate-x-[-50%] text-4xl text-center' >Just using typeScript <br /><span className='text-2xl' >{colors[random]}</span></h1>

                <button className='p-4 w-fit sm:w-full text-center text-white font-bold bg-slate-900/70 hover:bg-slate-900/60 active:bg-slate-900 shadow-lg rounded-md' onClick={changeRandom} >Change Color</button>

            </div>
        </>
    )
}

export default App