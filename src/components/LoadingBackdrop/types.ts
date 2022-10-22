import { BackdropProps } from '@mui/material/Backdrop';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { PortalProps } from '@mui/material/Portal';

export type Props = PortalProps & {
  backdrop?: Omit<BackdropProps, 'open'>;
  delay?: number;
  icon?: CircularProgressProps;
};
