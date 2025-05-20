import React, { useState } from 'react'


const App = () => {
  const [display, setDisplay] = useState("Enter your number");

  const clickHandler = (value) => {
    setDisplay(prev =>
      prev === "Enter your number" ? value : prev + value)
  }

  const pakon = () => {
    setDisplay(prev => {
      if(prev.length <= 1 || prev === "Enter your number") {
        return "Enter your number";
      }
      return prev.slice(0, -1)
    })
  }



  const batman = () => {
    const operator = display.match(/[\+\-\*\/]/)?.[0];
    const parts = display.split(/[\+\-\*\/]/);
    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);

    if(operator === "+"){
      const result = number1 + number2;
      setDisplay(result);
    }else if( operator === "-"){
      const result = number1 - number2;
      setDisplay(result);
    }else if(operator === "/"){
      const result = number1 / number2;
      setDisplay(result);
    }else if(operator === "*"){
      const result = number1 * number2;
      setDisplay(result);
    }
  }



  return (
    <div className='bg-gradient-to-r from-cyan-700 to-neutral-900 h-screen flex justify-center'>
        <div className="absolute inline-block">
          <h1 className='text-5xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 p-5 bg-clip-text text-transparent '>Calculator App</h1>
          <div className="w-[5rem] h-[5rem] rounded-full bg-white blur-[4rem] absolute top-2"></div>
          <div className="w-[10rem] h-[5rem] rounded-full bg-blue-200 blur-[4rem] absolute top-2 right-4 "></div>
        </div>

        <div className="flex justify-center relative mt-[5rem]  ">
          <h1 className='text-gray-200/50 text-2xl p-5 w-[20rem] text-center border border-solid rounded-lg absolute shadow-lg'>{display}</h1>
          <div className="flex flex-col gap-5 items-center absolute top-[6rem] border p-5 rounded-lg shadow-cyan-100 shadow-lg">
            <div className="flex gap-5">
            <button onClick={() => clickHandler("1")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>1</button>
            <button onClick={() => clickHandler("2")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>2</button>
            <button onClick={() => clickHandler("3")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>3</button>
            <button onClick={() => clickHandler("4")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>4</button>
            </div>

            <div className="flex gap-5">
            <button onClick={() => clickHandler("5")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>5</button>
            <button onClick={() => clickHandler("6")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>6</button>
            <button onClick={() => clickHandler("7")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>7</button>
            <button onClick={() => clickHandler("8")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>8</button>
            </div>

            <div className="flex gap-5">

            <button onClick={() => clickHandler("9")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>9</button>
            <button onClick={() => clickHandler("0")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>0</button>
            <button onClick={() => clickHandler("*")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>X</button>
            <button onClick={() => clickHandler("/")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>/</button>
            </div>

            
            <div className="flex gap-5">
            <button onClick={() => clickHandler("+")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>+</button>
            <button onClick={() => clickHandler("-")} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all '>-</button>
            <button onClick={batman} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>=</button>
            <button onClick={pakon} className='border border-blue-400 p-5 rounded-md shadow-blue-100/35 shadow-md text-2xl font-bold text-white hover:border-blue-600 transition-all'>⌫</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default App
