import { CardProps } from '@mui/material/Card';
import { Moment } from 'moment/moment';

export type Props = CardProps & {
  checkIn: Moment;
  checkOut: Moment;
  description: string;
  header: string;
  meals?: string[];
  onCancel: () => void;
  peopleAmount: number;
  price: number;
};
