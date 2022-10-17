import React, { FC, Suspense as ReactSuspense } from 'react';

import { SuspenseProps } from 'src/utils/Suspense/types';

const Suspense: FC<SuspenseProps> = ({ component, fallback }) => (
  <ReactSuspense fallback={fallback}>{component}</ReactSuspense>
);

export default Suspense;
