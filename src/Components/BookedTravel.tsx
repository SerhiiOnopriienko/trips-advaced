import { BookedTravelProps } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { bookingActions } from "../store/actions";

function BookedTravel({ trip }: BookedTravelProps) {
  const dispatch = useAppDispatch();
  const removeTrip = () => {
    dispatch(bookingActions.deleteBooking(trip.id));
  };

  const currentDate = new Date(trip.date);

  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {trip.trip.title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {trip.guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {`${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        ${trip.totalPrice}
      </span>
      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
        onClick={removeTrip}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
}

export default BookedTravel;
