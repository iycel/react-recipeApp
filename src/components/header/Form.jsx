import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    // console.log(getData());
  };

  const handleChange = (e) => {
    return setMeal(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
      <Select name="mealTypes" id="mealTypes" onChange={handleChange}>
        {mealTypes.map((item, id) => {
          return (
            <option key={id} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </Select>
    </FormContainer>
  );
};

export default Form;
