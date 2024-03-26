import CardContainer from "./components/CardContainer";
import {data} from "./helper/data"
import "./App.css"
import Header from "./components/Header";
import { useState } from "react";



function App() {
  const  [searchPlayer, setSearchPlayer] = useState ("")
  // console.log(data)
  return (
    <div className="App">
      <Header setSearchPlayer={setSearchPlayer} searchPlayer={searchPlayer} />
      <CardContainer data={data} searchPlayer={searchPlayer} />
    </div>
  );
}

export default App;
