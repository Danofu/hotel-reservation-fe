import { SvgIconProps } from '@mui/material/SvgIcon';

import { TooltipIconButtonProps } from 'components/buttons/TooltipIconButton';

export type Props = TooltipIconButtonProps & { IconProps?: SvgIconProps; visible?: boolean };
