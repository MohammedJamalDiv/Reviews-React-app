import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();
export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this the Default item',
      rating: 10,
    },
  ]);
  const [feedbackedit, setFeedbackedit] = useState([
    {
      item: {},
      edit: false,
    },
  ]);
  const HandleDelete = function (id) {
    if (window.confirm('Are You Sure to delete the FeedBack ?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };
  // Editing the feedback
  const editFeedBack = function (item) {
    setFeedbackedit({
      item,
      edit: true,
    });
  };
  const addFeedBack = function (NewFeedback) {
    NewFeedback.id = uuidv4();
    console.log(NewFeedback);
    setFeedback([NewFeedback, ...feedback]);
  };
  const UpdateFeedBack = function (id, upDateitem) {
    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...upDateitem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        HandleDelete,
        addFeedBack,
        editFeedBack,
        feedbackedit,
        UpdateFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
