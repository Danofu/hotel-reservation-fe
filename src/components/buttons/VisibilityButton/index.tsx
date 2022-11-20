import React, { FC } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';

import TooltipIconButton from 'components/buttons/TooltipIconButton';
import { Props } from 'components/buttons/VisibilityButton/types';
import { TPATH } from 'components/buttons/VisibilityButton/constants';

const VisibilityButton: FC<Props> = ({ IconProps, TooltipProps, visible = true, ...props }) => {
  const { t } = useTranslation();

  return (
    <TooltipIconButton TooltipProps={{ title: t(`${TPATH}.${visible ? 'show' : 'hide'}`), ...TooltipProps }} {...props}>
      {visible ? <VisibilityIcon {...IconProps} /> : <VisibilityOffIcon {...IconProps} />}
    </TooltipIconButton>
  );
};

export default VisibilityButton;

export type VisibilityButtonProps = Props;
