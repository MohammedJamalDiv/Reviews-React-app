import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';
import { useContext, useEffect } from 'react';

function FeedbackForms() {
  const { addFeedBack, feedbackedit, UpdateFeedBack } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [BtnDisbabled, setBtnStatus] = useState('true');
  const [Message, setMessage] = useState('');
  useEffect(() => {
    if (feedbackedit.edit === true) {
      setText(feedbackedit.item.text);
      setRating(feedbackedit.item.rating);
      setBtnStatus(false);
    }
  }, [feedbackedit]);
  const handleTextChange = e => {
    if (text === '') {
      setBtnStatus(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnStatus(true);
      setMessage('Your Review Must be more than 10 characters');
    } else {
      setBtnStatus(false);
      setMessage('You are Good to go :)');
    }
    setText(e.target.value);
  };
  const handleSumbit = e => {
    e.preventDefault();
    if (text.trim().length > 10 && rating !== '') {
      const NewFeedback = {
        text,
        rating,
      };
      if (feedbackedit.edit === true) {
        console.log(feedbackedit);
        UpdateFeedBack(feedbackedit.item.id, NewFeedback);
        setText('');
        setMessage('Review Has Been Edited');
      } else {
        addFeedBack(NewFeedback);
        setText('');
      }
    }
  };
  return (
    <Card>
      <form onSubmit={handleSumbit}>
        <h2>How would you Rate Your service with us</h2>
        <RatingSelect Select={ratingval => setRating(ratingval)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            className="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit" isDisabled={BtnDisbabled}>
            Send
          </Button>
        </div>
        {Message && <div className="message">{Message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForms;
