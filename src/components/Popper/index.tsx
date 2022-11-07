import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import MuiPopper from '@mui/material/Popper';
import React, { FC, Fragment } from 'react';
import merge from 'lodash/merge';

import { PopperFadeContentProps, Props } from 'components/Popper/types';
import { defaultArrowSx, defaultPopperSx } from 'components/Popper/constants';

const Popper: FC<Props> = ({
  ArrowProps,
  ArrowSx,
  FadeProps,
  arrowSize = 8,
  children,
  enableArrow,
  modifiers = [],
  sx,
  transition,
  ...props
}) => {
  const popperContent = (
    <Fragment>
      {enableArrow && <Box data-popper-arrow sx={merge(defaultArrowSx(arrowSize), ArrowSx)} {...ArrowProps} />}
      {children}
    </Fragment>
  );

  const PopperFadeContent: FC<PopperFadeContentProps> = ({ TransitionProps }) => (
    <Fade {...TransitionProps} {...FadeProps}>
      <Box>{popperContent}</Box>
    </Fade>
  );

  return (
    <MuiPopper
      modifiers={[{ enabled: enableArrow, name: 'arrow' }, ...modifiers]}
      sx={merge(defaultPopperSx(arrowSize), sx)}
      transition={transition}
      {...props}
    >
      {transition ? PopperFadeContent : popperContent}
    </MuiPopper>
  );
};

export default Popper;

export type PopperProps = Props;
