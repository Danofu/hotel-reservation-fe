import { BackdropProps } from '@mui/material/Backdrop';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { PortalProps } from '@mui/material/Portal';

export type Props = Partial<BackdropProps> & {
  IconProps?: CircularProgressProps;
  PortalProps?: PortalProps;
  delay?: number;
};
