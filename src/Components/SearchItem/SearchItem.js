import React, { useEffect, useState } from "react";

const SearchItem = () => {
  const [Data, setData] = useState([]);
  const [Menu, setMenu] = useState([]);
  const [input, setInput] = useState([]);
  const [find, setFind] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const result = await response.json();
      console.log(result);
      setData(result);


    };
  });
};
export default SearchItem;
