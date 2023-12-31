import { useContext, useState } from "react"
import ActionCard from "./components/reusablecomponent/ActionCard"
import { CatContext } from "./context/CatContext"
import ActionCardWithInfo from "./components/reusablecomponent/ActionCardWithInfo"
import Logo from "./components/reusablecomponent/Logo"
import Header from "./components/Header"
import MostSearched from "./components/MostSearched"
import Reason from "./components/Reason"
import Footer from "./components/Footer"



function App() {
  const { data, setData } = useContext(CatContext)
  const [selectedOption, setSelectedOption] = useState('')

  // console.log(data)
  return (
    <div>
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption } />
      <MostSearched />
      <Reason />
      <Footer/>

      {/* <ActionCardWithInfo />
      <ActionCardWithInfo /> */}
      {/* {data.map(item => <ActionCard key={item.id} src={item?.image?.url} />)} */}

    </div>
  )
}

export default App
