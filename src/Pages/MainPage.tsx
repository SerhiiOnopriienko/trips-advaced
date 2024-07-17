import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import TravelCards from "../Components/TravelCards";

function MainPage() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  return (
    <>
      <SearchBar
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        duration={duration}
        setDuration={setDuration}
        level={level}
        setLevel={setLevel}
      />
      <TravelCards
        searchInputValue={searchInputValue}
        duration={duration}
        level={level}
      />
    </>
  );
}

export default MainPage;
