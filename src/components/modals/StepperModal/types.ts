import { BoxProps } from '@mui/material/Box';
import { ModalProps } from '@mui/material/Modal';
import { ReactNode } from 'react';
import { StepLabelProps } from '@mui/material/StepLabel';
import { StepProps } from '@mui/material/Step';
import { StepperProps } from '@mui/material/Stepper';

import { OptionalKeys } from 'app-globals';
import { ButtonProps } from '@mui/material/Button';

export type Props = OptionalKeys<ModalProps, 'children'> & {
  ActionsWrapper?: BoxProps;
  BackButtonProps?: Omit<ButtonProps, 'sx'>;
  BackButtonSx?: ButtonProps['sx'];
  FinishButtonProps?: ButtonProps;
  NextButtonProps?: ButtonProps;
  PaperProps?: Omit<BoxProps, 'sx'>;
  PaperSx?: BoxProps['sx'];
  SkipButtonProps?: Omit<ButtonProps, 'sx'>;
  SkipButtonSx?: ButtonProps['sx'];
  StepLabelProps?: StepLabelProps;
  StepProps?: StepProps;
  StepperProps?: Omit<StepperProps, 'sx'>;
  StepperSx?: StepperProps['sx'];
  onFinish?: () => void;
  steps: { element: ReactNode; isOptional?: boolean; label: ReactNode }[];
};
