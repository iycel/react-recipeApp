import React from "react";
import { RecipeImage, RecipeCard, RecipeHeader, Button } from "./HomeStyles";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const RecipeCardComp = ({ food }) => {
  // props.recipe si yazmış olduk
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { food } });
    // useNavigate()= bir olay işleyicide veya durumdaki bazı değişikliklere yanıt olarak programlı olarak gezinmenize izin verir. direk butona tıklanınca <Details/> yazamazdık mesela <Header/> gibi, çünkü Details sayfasına bir route atanmış. direk usenavigate i buraya yazarsak extra import yazılmalı, o yüzden function dışında tanımlıyoruz
    // view more tıklandığında o yiyeceğin adıyla detaylarının old sayfaya yönlen. buraya veriler emanet geldi home dan, buradan giderken state e gömerek navigate ile yolluyoruz. recipe=bütün data(label, image, details...)
  };
  // console.log(recipe.ingredientLines);
  //   console.log(food);
  //  console.log(recipe.recipe);
  return (
    <RecipeCard>
      {/* Home dan recipes datasından bir recipe buraya geldi */}
      <RecipeHeader>{food?.label}</RecipeHeader>

      <RecipeImage src={food?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
