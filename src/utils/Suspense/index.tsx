import React, { FC, Suspense as ReactSuspense } from 'react';

import { Props } from 'src/utils/Suspense/types';

const Suspense: FC<Props> = ({ component, fallback }) => <ReactSuspense fallback={fallback}>{component}</ReactSuspense>;

export default Suspense;

export type SuspenseType = Props;
