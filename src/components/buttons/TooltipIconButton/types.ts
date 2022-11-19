import { IconButtonProps } from '@mui/material/IconButton';
import { TooltipProps } from '@mui/material/Tooltip';

export type Props = IconButtonProps & { TooltipProps?: Omit<TooltipProps, 'children'> };
