export interface Trip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

interface BookedTrip {
  title: string;
  duration: number;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: Date;
  trip: BookedTrip;
  totalPrice: number;
  createdAt: Date;
}

export interface NewBooking {
  tripId: string;
  guests: number;
  date: Date;
}

export interface InputProps {
  inputName: string;
  dataTestId: string;
  name: string;
  type: string;
  enteredValue: string;
  setEnteredValue: (name: string, value: string) => void;
  pattern?: string;
  title?: string;
}

export interface SignProps {
  formValue: {
    "full-name": string;
    email: string;
    password: string;
  };
  setEnteredValue: (name: string, value: string) => void;
}

export interface SearchProps {
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  level: string;
  setLevel: (value: string) => void;
}

export interface TravelCardsProps {
  searchInputValue: string;
  duration: string;
  level: string;
}

export interface CardProps {
  trip: Trip;
}

export interface TripModalProps {
  setModalOpened: (valuse: boolean) => void;
  modalOpened: boolean;
  trip: Trip;
}

export interface BookedTravelProps {
  key: string;
  trip: Booking;
  bookings: Booking[];
}

export interface State {
  trips: {
    trips: Trip[];
  };
}

export interface LoadTripsAction {
  type: "trips/load-trips";
  payload: Trip;
}

export type Actions = LoadTripsAction;

export interface AuthUser {
  user: string;
  token: string;
}
