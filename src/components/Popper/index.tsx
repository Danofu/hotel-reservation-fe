import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import MuiPopper from '@mui/material/Popper';
import React, { FC } from 'react';
import merge from 'lodash/merge';

import { Props } from 'components/Popper/types';
import { defaultArrowSx, defaultPopperSx } from 'components/Popper/constants';

const Popper: FC<Props> = ({
  arrowProps,
  arrowSize = 8,
  arrowSx,
  children,
  enableArrow,
  fade,
  modifiers = [],
  sx,
  transition,
  ...props
}) => {
  const popperContent = (
    <>
      {enableArrow && <Box data-popper-arrow sx={merge(defaultArrowSx(arrowSize), arrowSx)} {...arrowProps} />}
      {children}
    </>
  );

  return (
    <MuiPopper
      modifiers={[{ enabled: enableArrow, name: 'arrow' }, ...modifiers]}
      sx={merge(defaultPopperSx(arrowSize), sx)}
      transition={transition}
      {...props}
    >
      {transition
        ? ({ TransitionProps }) => (
            <Fade {...TransitionProps} {...fade}>
              <Box>{popperContent}</Box>
            </Fade>
          )
        : popperContent}
    </MuiPopper>
  );
};

export default Popper;

export type PopperProps = Props;
