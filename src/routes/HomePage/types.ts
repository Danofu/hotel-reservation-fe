import { Moment } from 'moment/moment';

export type Room = {
  cena: number;
  dodatkowa_informacja: string;
  id: number;
  ilosc_miejsc: number;
  ilosc_mieszkan: number;
  kategorja: string;
};

export type Meal = {
  menu: {
    cena: number;
    id: number;
    nazwa: string;
  }[];
};

export interface ModalFormValues {
  checkIn: Moment | null;
  checkOut: Moment | null;
  meals: number[];
}
