import React, { FC, Suspense as ReactSuspense } from 'react';

import { Props } from 'src/utils/Suspense/types';

const Suspense: FC<Props> = ({ component, ...props }) => <ReactSuspense {...props}>{component}</ReactSuspense>;

export default Suspense;

export type SuspenseProps = Props;
