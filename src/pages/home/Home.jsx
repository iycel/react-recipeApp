import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { MainContainer, HomeImg, ImgDiv } from "./HomeStyles";
import RecipeCardComp from "./RecipeCardComp";
import homeSvg from "../../assets/home.svg";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      // console.log(result.data.hits);
    } else {
      alert("Please fill");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />
      {food ? (
        <MainContainer>
          {food?.map((item, index) => (
            <RecipeCardComp key={index} food={item.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
