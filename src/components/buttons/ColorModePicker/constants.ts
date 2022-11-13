import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { TFunction } from 'i18next';

export const TPATH = 'components.buttons.color-mode-picker';

export const translatableButton = (t: TFunction) => [
  { Icon: LightModeIcon, title: t(`${TPATH}.light`), value: 'light' },
  { Icon: SettingsBrightnessIcon, title: t(`${TPATH}.auto`), value: 'auto' },
  { Icon: DarkModeIcon, title: t(`${TPATH}.dark`), value: 'dark' },
];
