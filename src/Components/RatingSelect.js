import React from 'react';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function RatingSelect({ Select }) {
  const { feedbackedit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState();
  useEffect(() => {
    if (feedbackedit.edit === true) {
      setSelected(feedbackedit.item.rating);
    }
  }, [feedbackedit]);

  const handleClick = e => {
    setSelected(+e.currentTarget.value);
    console.log(e);

    Select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          value="1"
          id="num1"
          name="rating"
          onChange={handleClick}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          value="2"
          id="num2"
          name="rating"
          onChange={handleClick}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          value="3"
          name="rating"
          onChange={handleClick}
          checked={selected === 3}
        />
        <label htmlFor="num1">3</label>
      </li>
      <li>
        <input
          type="radio"
          value="4"
          id="num4"
          name="rating"
          onChange={handleClick}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          value="5"
          id="num5"
          name="rating"
          onChange={handleClick}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          value="6"
          name="rating"
          onChange={handleClick}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleClick}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          value="8"
          name="rating"
          onChange={handleClick}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="9"
          value={9}
          name="rating"
          onChange={handleClick}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleClick}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
