import { LazyExoticComponent, SuspenseProps } from 'react';

export type Props = SuspenseProps & { Component: LazyExoticComponent<() => JSX.Element> };
