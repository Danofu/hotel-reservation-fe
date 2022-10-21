import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { Props } from 'src/components/Spacer/types';

const Spacer: FC<Props> = ({ flex = 1 }) => <Box flex={flex} />;

export default Spacer;
