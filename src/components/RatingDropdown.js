import React from "react";
import Select, { components } from "react-select";
import generateStars from "./GenerateStars";

function RatingDropdown({ onRatingSelect, selectedRating }) {
  const ratings = [
    { value: 0, label: "Any Rating" },
    { value: 1, label: generateStars(1) },
    { value: 2, label: generateStars(2) },
    { value: 3, label: generateStars(3) },
    { value: 4, label: generateStars(4) },
    { value: 5, label: generateStars(5) },
    { value: 6, label: generateStars(6) },
    { value: 7, label: generateStars(7) },
    { value: 8, label: generateStars(8) },
    { value: 9, label: generateStars(9) },
    { value: 10, label: generateStars(10) },
  ];

  const handleRatingSelect = (selectedRatings) => {
    onRatingSelect(selectedRatings.map((rating) => rating.value));
  };

  const Option = (props) => {
    return (
      <components.Option {...props}>
        <div dangerouslySetInnerHTML={{ __html: props.data.label }} />
      </components.Option>
    );
  };


  return (
    <Select
      components={{ Option }}
      isMulti
      options={ratings}
      value={ratings.filter((rating) => selectedRating.includes(rating.value))}
      onChange={handleRatingSelect}
      placeholder="Ratings"
    />
  );
}

export default RatingDropdown;