import { SxProps, Theme } from '@mui/material';

export const defaultPopperSx = (arrowSize: number): SxProps<Theme> => ({
  '&[data-popper-placement^="bottom"] .MuiBox-root[data-popper-arrow]': { top: -arrowSize / 2 },
  '&[data-popper-placement^="left"] .MuiBox-root[data-popper-arrow]': { right: -arrowSize / 2 },
  '&[data-popper-placement^="right"] .MuiBox-root[data-popper-arrow]': { left: -arrowSize / 2 },
  '&[data-popper-placement^="top"] .MuiBox-root[data-popper-arrow]': { bottom: -arrowSize / 2 },
  zIndex: ({ zIndex }) => zIndex.drawer + 1,
});

export const defaultArrowSx = (arrowSize: number): SxProps<Theme> => ({
  '&, ::before': {
    bgcolor: 'background.paper',
    height: arrowSize,
    position: 'absolute',
    width: arrowSize,
  },
  '::before': {
    border: '1px solid transparent',
    borderLeftColor: 'divider',
    borderTopColor: 'divider',
    boxShadow: 4,
    content: '""',
    rotate: '45deg',
    visibility: 'visible',
  },
  visibility: 'hidden',
  zIndex: -1,
});
