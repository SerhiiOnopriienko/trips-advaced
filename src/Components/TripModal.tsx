import { useState } from "react";
import { TripModalProps } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { bookingActions } from "../store/actions";

function TripModal({ trip, modalOpened, setModalOpened }: TripModalProps) {
  const closeModal = () => setModalOpened(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [dateOfTrip, setDateOfTrip] = useState(new Date(""));

  const dispatch = useAppDispatch();

  const getNumberOfGuests = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumberOfGuests(+e.target.value);

  const getDateOfTrip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfTrip(new Date(e.target.value));
  };

  const addingBookings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      bookingActions.createBooking({
        tripId: trip.id,
        guests: numberOfGuests,
        date: dateOfTrip,
      })
    );
    closeModal();
  };

  return (
    <div hidden={!modalOpened}>
      <div className="modal">
        <div data-test-id="book-trip-popup" className="book-trip-popup">
          <button
            data-test-id="book-trip-popup-close"
            className="book-trip-popup__close"
            onClick={closeModal}
          >
            ×
          </button>
          <form
            className="book-trip-popup__form"
            autoComplete="off"
            onSubmit={addingBookings}
          >
            <div className="trip-info">
              <h3
                data-test-id="book-trip-popup-title"
                className="trip-info__title"
              >
                {trip.title}
              </h3>
              <div className="trip-info__content">
                <span
                  data-test-id="book-trip-popup-duration"
                  className="trip-info__duration"
                >
                  <strong>{trip.duration}</strong> days
                </span>
                <span
                  data-test-id="book-trip-popup-level"
                  className="trip-info__level"
                >
                  {trip.level}
                </span>
              </div>
            </div>
            <label className="input">
              <span className="input__heading">Date</span>
              <input
                data-test-id="book-trip-popup-date"
                name="date"
                type="date"
                onChange={getDateOfTrip}
                required
              />
            </label>
            <label className="input">
              <span className="input__heading">Number of guests</span>
              <input
                data-test-id="book-trip-popup-guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                value={numberOfGuests}
                onChange={getNumberOfGuests}
                required
              />
            </label>
            <span className="book-trip-popup__total">
              Total:
              <output
                data-test-id="book-trip-popup-total-value"
                className="book-trip-popup__total-value"
              >
                ${trip.price * numberOfGuests}
              </output>
            </span>
            <button
              data-test-id="book-trip-popup-submit"
              className="button"
              type="submit"
            >
              Book a trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TripModal;
