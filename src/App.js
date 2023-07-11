import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  async function getAlbum() {
    try {
      let response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(response.data);
    } catch (error) {
      throw new Error("fetch faild");
    }
  }

  useEffect(() => {
    getAlbum();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardSection albums={topAlbums} />
    </div>
  );
}

export default App;
