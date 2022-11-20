import { IconButtonProps } from '@mui/material/IconButton';
import { TooltipProps } from '@mui/material/Tooltip';

/** The {@link default | TooltipIconButton} properties type. */
export type Props = IconButtonProps & { TooltipProps?: Partial<TooltipProps> };
