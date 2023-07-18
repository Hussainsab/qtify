import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import { fetchTopAlbums } from "./api/api";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  async function getAlbum() {
    try {
      let response = await fetchTopAlbums();
      setTopAlbums(response);
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
      <div className={style.sectionWrapper}>
        <Section title={"Top Albums"} data={topAlbums} type={"album"} />
      </div>
    </div>
  );
}

export default App;
