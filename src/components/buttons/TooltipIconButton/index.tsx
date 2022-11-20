/**
 * The {@link default | TooltipIconButton} component.
 * @module TooltipIconButton
 */
import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';

import { Props } from 'components/buttons/TooltipIconButton/types';

/**
 * Renders the **Material UI** {@link https://mui.com/material-ui/api/icon-button/#props | IconButton} component with {@link https://mui.com/material-ui/api/tooltip/#props | Tooltip} component.
 *
 * If no tooltip title provided, `Tooltip` will not be rendered.
 *
 * The component declaration:
 * ```ts
 * const TooltipIconButton: FC<Props> = ({ TooltipProps, children, ...props }) => (
 *   // ...
 * );
 * ```
 *
 * @example
 * ```tsx
 * <TooltipIconButton TooltipProps={{ title: 'My tooltip title' }} onClick={handleClick} type="button">
 *   <Icon />
 * </TooltipIconButton>
 * ```
 *
 * @group Component
 */
const TooltipIconButton: FC<Props> = ({ TooltipProps, children, ...props }) => (
  <Tooltip title="" {...TooltipProps}>
    <IconButton {...props}>{children}</IconButton>
  </Tooltip>
);

export default TooltipIconButton;

export type { Props as TooltipIconButtonProps } from 'components/buttons/TooltipIconButton/types';
