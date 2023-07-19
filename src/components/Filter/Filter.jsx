import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { fetchGeners } from "../../api/api";

const Filter = ({ filterSong }) => {
  const [value, setValue] = useState(0);
  const [geners, setGeners] = useState(["all"]);

  const getGeners = async () => {
    let categories = await fetchGeners();
    setGeners([...geners, ...categories.data.map((item) => item.key)]);
  };

  useEffect(() => {
    getGeners();
  }, []);

  const handleChange = (event, newValue) => {
    let songKey = event.target.innerText;
    filterSong(songKey.toLowerCase());
    setValue(newValue);
  };
  console.log("tab = ", value);
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "20px" }}>
      <Tabs
        selectionFollowsFocus="true"
        textColor="white"
        TabIndicatorProps={{ style: { background: "green" } }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {geners.map((item) => (
          <Tab label={item} key={item} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Filter;
