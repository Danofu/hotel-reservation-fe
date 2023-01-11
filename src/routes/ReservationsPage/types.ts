export type Reservation = {
  check_in: string;
  check_out: string;
  data_rezerwacji: string;
  id: number;
  id_pokoj: number;
  id_pracownika: number;
  id_user: number;
  suma: number;
  pokoj: {
    id: number;
    id_kategorja: number;
    kategorja: {
      cena: number;
      dodatkowa_informacja: string;
      id: number;
      ilosc_miejsc: number;
      ilosc_mieszkan: number;
      kategorja: string;
    };
  };
  jedzenie: {
    id: number;
    id_menu: number;
    id_rezerwacji: number;
    ilosc_osob: number;
    menu: { cena: number; id: number; kalorycznosc: number; nazwa: string };
  }[];
};
