import React, { FC, Suspense as ReactSuspense } from 'react';

import { Props } from 'components/utils/Suspense/types';

const Suspense: FC<Props> = ({ Component, ...props }) => (
  <ReactSuspense {...props}>
    <Component />
  </ReactSuspense>
);

export default Suspense;

export type SuspenseProps = Props;
