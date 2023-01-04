import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { FC, useState } from 'react';
import Step, { StepProps } from '@mui/material/Step';
import StepLabel, { StepLabelProps } from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import Spacer from 'components/utils/Spacer';
import { Props } from 'components/modals/StepperModal/types';
import { modalContainer, TPATH } from 'components/modals/StepperModal/constants';

const ReservationStepperModal: FC<Props> = ({
  ActionsWrapper,
  BackButtonProps,
  BackButtonSx,
  FinishButtonProps,
  NextButtonProps,
  PaperProps,
  PaperSx,
  SkipButtonProps,
  SkipButtonSx,
  StepLabelProps,
  StepProps,
  StepperProps,
  StepperSx,
  onFinish = () => undefined,
  steps,
  ...props
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState(new Set<number>());
  const { t } = useTranslation();

  const isStepSkipped = (step: number) => skippedSteps.has(step);

  const isStepOptional = (step: number) => steps[step].isOptional;

  const handleBack = () => setActiveStep((prevActiveStep) => --prevActiveStep);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => ++prevActiveStep);
    setSkippedSteps((prevSkippedSteps) => {
      const nextSkippedSteps = new Set(prevSkippedSteps.values());
      return nextSkippedSteps.add(activeStep);
    });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onFinish();
      return;
    }

    setActiveStep((prevActiveStep) => ++prevActiveStep);
    setSkippedSteps((prevSkippedSteps) => {
      let nextSkippedSteps = prevSkippedSteps;
      if (isStepSkipped(activeStep)) {
        nextSkippedSteps = new Set(nextSkippedSteps.values());
        nextSkippedSteps.delete(activeStep);
      }

      return nextSkippedSteps;
    });
  };

  return (
    <Modal container={modalContainer} {...props}>
      <Box
        bgcolor="background.paper"
        borderRadius={3}
        boxShadow={4}
        left="50%"
        minWidth={800}
        p={4}
        position="absolute"
        sx={{ translate: '-50% -50%', ...PaperSx }}
        top="50%"
        {...PaperProps}
      >
        <Stepper activeStep={activeStep} sx={{ mb: 3, ...StepperSx }} {...StepperProps}>
          {steps.map(({ label }, index) => {
            const stepProps: StepProps = { ...StepProps };
            const labelProps: StepLabelProps = { ...StepLabelProps };

            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">{t(`${TPATH}.label.optional`)}</Typography>;
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {steps[activeStep].element}
        <Box display="flex" mt={3} {...ActionsWrapper}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1, ...BackButtonSx }}
            {...BackButtonProps}
          >
            {t(`${TPATH}.actions.back`)}
          </Button>
          <Spacer />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, ...SkipButtonSx }} {...SkipButtonProps}>
              {t(`${TPATH}.actions.skip`)}
            </Button>
          )}
          {activeStep !== steps.length - 1 && (
            <Button onClick={handleNext} {...NextButtonProps}>
              {t(`${TPATH}.actions.next`)}
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button onClick={onFinish} {...FinishButtonProps}>
              {t(`${TPATH}.actions.finish`)}
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ReservationStepperModal;
