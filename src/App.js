import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  async function getAlbum() {
    try {
      let responseTopALbums = await fetchTopAlbums();
      let responseNewAlbums = await fetchNewAlbums();
      setTopAlbums(responseTopALbums);
      setNewAlbums(responseNewAlbums);
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
        <Section title={"New Albums"} data={newAlbums} type={"album"} />
      </div>
    </div>
  );
}

export default App;
