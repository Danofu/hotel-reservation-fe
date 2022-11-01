import React, { FC, Suspense as ReactSuspense } from 'react';

import { Props } from 'utils/Suspense/types';

const Suspense: FC<Props> = ({ component, ...props }) => <ReactSuspense {...props}>{component}</ReactSuspense>;

export default Suspense;

export type SuspenseProps = Props;
