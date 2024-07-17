import BookedTravel from "../Components/BookedTravel";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import { bookingActions } from "../store/actions";
import { useEffect } from "react";

function Bookings() {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings.bookings);

  useEffect(() => {
    dispatch(bookingActions.loadBookings());
  }, []);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.length ? (
          bookings.map((trip) => (
            <BookedTravel
              key={`${trip.createdAt}`}
              trip={trip}
              bookings={bookings}
            />
          ))
        ) : (
          <h1>No booked trips</h1>
        )}
      </ul>
    </main>
  );
}

export default Bookings;
