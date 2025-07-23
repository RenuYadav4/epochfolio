import Bottom from "./Pages/Bottom"
import Services from "./Pages/Services"
import Trust from "./Pages/Trust"
import Growth from "./servicepage/Growth"
import Impact from "./servicepage/Impact"
import Matters from "./servicepage/Matters"

function App() {

  return (
    <>
      <div className="lg:flex flex-col gap-10">
        {/* <Trust />
        <Services />
        <Bottom/> */}
        <Growth/>
        <Impact/>
        <Matters/>
      </div>

    </>
  )
}

export default App
