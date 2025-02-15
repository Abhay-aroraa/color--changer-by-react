import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (

    <div className="w-full h-screen"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "red"}}>red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "green"}}>green</button>
          <button onClick={() => setColor("pink")}  className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "pink"}}>pink</button>
          <button onClick={() => setColor("blue")}  className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={() => setColor("yellow")}  className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={() => setColor("purple")}  className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={() => setColor("brown")}  className="outline-none px-4 py-1 rounded-xl" style={{backgroundColor: "brown"}}>brown</button>
          </div>
      </div>
    </div>

  )
}

export default App
