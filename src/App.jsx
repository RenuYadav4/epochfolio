import Bottom from "./Pages/Bottom"
import Services from "./Pages/Services"
import Trust from "./Pages/Trust"

function App() {

  return (
    <>
      <div className="flex flex-col gap-20 lg:gap-30">
        <Trust />
        <Services />
        <Bottom/>
      </div>

    </>
  )
}

export default App
