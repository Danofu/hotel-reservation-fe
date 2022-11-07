import { IconButtonProps } from '@mui/material/IconButton';
import { SvgIconProps } from '@mui/material/SvgIcon';

import { LangManuProps } from 'components/menus/LangMenu';

// TODO: use Partial instead of Omit
export type Props = Omit<IconButtonProps, 'onClick'> & {
  IconProps?: SvgIconProps;
  LangMenuProps?: Partial<LangManuProps>;
};
