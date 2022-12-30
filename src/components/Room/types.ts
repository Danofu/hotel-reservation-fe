import { MouseEvent } from 'react';

// TODO: create proper props
export type Props = {
  description: string;
  header: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  peopleAmount: number;
  price: number;
};
