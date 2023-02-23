import { useState, useEffect } from "react";
import TopArticles from "./TopArticles";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./HomeNews.css";

export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default function News() {
  const [topArticles, setTopArticles] = useState([]);
  const [region, setRegion] = useState(["au"]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${region}&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setTopArticles(response.data.articles));
  }, [region]);

  //   console.log(topArticles);

  const handleChange = (event) => {
    setRegion(event.target.value);
    // console.log(region)
  };

  return (
    <div>
      <h2 id="title">Top Headlines</h2>
      <div id="all-news-button">
        <Stack spacing={2} direction="row">
          <Button id="all-news-button" variant="outlined" href="/allnews">
            Search News
          </Button>
        </Stack>
      </div>
      <div id="dropdown-menu">
        <Box>
          <FormControl>
            <InputLabel id="country-selection">Region</InputLabel>
            <Select
              labelId="region-selection-label"
              id="region-selection"
              value={region}
              label="Region"
              onChange={handleChange}
            >
              <MenuItem value="ar">Argentina</MenuItem>
              <MenuItem value="ru">Russia</MenuItem>
              <MenuItem value="au">Australia</MenuItem>
              <MenuItem value="ae">United Arab Emirates</MenuItem>
              <MenuItem value="us">United States</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {topArticles.map((article, index) => (
        <TopArticles
          key={index}
          title={article.title}
          img={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}