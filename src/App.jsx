import { useState } from "react"

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className="w-full h-screen duratin-200"
    style={{backgroundColor:color}}

    >
      <div className="fixex flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded 3xl mt-2">
          <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
          <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>
        </div>
      </div>
     
    </div>

      
    </>
  )
}

export default App
