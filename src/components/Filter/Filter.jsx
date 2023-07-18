import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useState } from "react";

const Filter = ({ filterSong }) => {
  const [value, setValue] = useState(0);

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
        <Tab label="All" />
        <Tab label="Rock" />
        <Tab label="Pop" />
        <Tab label="Jazz" />
        <Tab label="Blues" />
      </Tabs>
    </Box>
  );
};

export default Filter;
