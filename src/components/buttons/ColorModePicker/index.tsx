import React, { FC, MouseEvent, useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { ColorMode } from 'providers/ThemeProvider';
import { Props } from 'components/buttons/ColorModePicker/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';
import { buttons } from 'components/buttons/ColorModePicker/constants';

const ColorModePicker: FC<Props> = ({ ButtonProps, IconProps, onChange, sx, ...props }) => {
  const { mode, setMode } = useContext(ThemeContext);

  const handleMode = (event: MouseEvent<HTMLElement>, newMode: ColorMode) => {
    if (newMode !== null) {
      setMode(newMode);
      localStorage.setItem('theme.mode', newMode);
    }

    onChange?.(event, newMode);
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={handleMode}
      sx={{ bgcolor: 'background.paper', boxShadow: 4, ...sx }}
      value={mode}
      {...props}
    >
      {buttons.map(({ Icon, title, value }) => (
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
