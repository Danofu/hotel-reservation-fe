import React, { FC, MouseEvent, useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTranslation } from 'react-i18next';

import { ColorMode } from 'providers/ThemeProvider';
import { Props } from 'components/buttons/ColorModePicker/types';
import { STORAGE_APP_COLOR_MODE } from 'app-globals';
import { ThemeContext } from 'providers/ThemeProvider/constants';
import { translatableButton } from 'components/buttons/ColorModePicker/constants';

const ColorModePicker: FC<Props> = ({ ButtonProps, IconProps, onChange = () => undefined, sx, ...props }) => {
  const { mode, setMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleMode = (event: MouseEvent<HTMLElement>, newMode: ColorMode) => {
    if (newMode !== null) {
      setMode(newMode);
      localStorage.setItem(STORAGE_APP_COLOR_MODE, newMode);
    }

    onChange(event, newMode);
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={handleMode}
      sx={{ bgcolor: 'background.paper', boxShadow: 4, ...sx }}
      value={mode}
      {...props}
    >
      {translatableButton(t).map(({ Icon, title, value }) => (
        <ToggleButton key={value} value={value} {...ButtonProps}>
          <Icon {...IconProps} />
          &nbsp;{title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ColorModePicker;

export type ColorModePickerProps = Props;
