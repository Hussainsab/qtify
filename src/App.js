import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import AccordionSection from "./components/Accordion/AccordionSection";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filterSongs, setFilterSongs] = useState([]);

  async function getAlbum() {
    try {
      let responseTopALbums = await fetchTopAlbums();
      let responseNewAlbums = await fetchNewAlbums();
      let songsList = await fetchSongs();
      setTopAlbums(responseTopALbums);
      setNewAlbums(responseNewAlbums);
      setSongs(songsList);
      setFilterSongs(songsList);
    } catch (error) {
      throw new Error("fetch faild");
    }
  }

  const filter = (keys) => {
    if (keys === "all") {
      setFilterSongs(JSON.parse(JSON.stringify(songs)));
    } else {
      let song = songs.filter((item, index) => item.genre.key === keys);
      setFilterSongs(JSON.parse(JSON.stringify(song)));
    }
  };

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
        <Section
          title={"Songs"}
          data={filterSongs}
          type={"songs"}
          filter={(key) => {
            filter(key);
          }}
        />
      </div>
      <AccordionSection />
    </div>
  );
}

export default App;
