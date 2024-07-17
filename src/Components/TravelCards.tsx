import { useEffect, useState } from "react";
import Card from "./Card";
import { TravelCardsProps } from "../types/types";
import { useAppSelector } from "../hooks/use-app-selector/use-app-selector.hook";
import { useAppDispatch } from "../hooks/use-app-dispatch/use-app-dispatch.hook";
import { tripsActions } from "../store/actions";

function TravelCards({ searchInputValue, duration, level }: TravelCardsProps) {
  const tripCards = useAppSelector((state) => state.trips.trips);
  const dispatch = useAppDispatch();
  const [filteredTripCards, setFilteredTripCards] = useState([...tripCards]);

  useEffect(() => {
    dispatch(tripsActions.loadTrips());
  }, []);

  useEffect(() => {
    const regexp = new RegExp(searchInputValue, "i");
    setFilteredTripCards(
      tripCards.filter((trip) => {
        const matchesTitle = trip.title.search(regexp) != -1;
        let matchesDuration = true;
        if (duration === "0_x_5") {
          matchesDuration = trip.duration <= 5;
        } else if (duration === "5_x_10") {
          matchesDuration = trip.duration > 5 && trip.duration <= 10;
        } else if (duration === "10") {
          matchesDuration = trip.duration > 10;
        }
        const matchesLevel = level === "" || trip.level === level;
        return matchesTitle && matchesDuration && matchesLevel;
      })
    );
  }, [tripCards, searchInputValue, duration, level]);

  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {filteredTripCards.map((trip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </ul>
    </section>
  );
}

export default TravelCards;
