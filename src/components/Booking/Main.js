import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};

const Main = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  // useEffect(() => {
  //   submitForm();
  // },);

  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectNumberOfGuests = ["1 Person", "2 People", "3 Peeple", "4 People"];
  const selectOccasions = ["Birthday", "Anniversary", "Family", "Couple"];
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes);

  return (
    <BookingForm
      availableTimes={availableTimes}
      submitForm={submitForm}
      selectNumberOfGuests={selectNumberOfGuests}
      selectOccasions={selectOccasions}
      dispatch={dispatch}
    />
  )
};

export default Main;