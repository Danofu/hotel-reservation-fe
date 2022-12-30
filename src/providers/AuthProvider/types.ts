import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren;

export type UserData = { user: { email: string; first_name: string; id: number; last_name: string } };
