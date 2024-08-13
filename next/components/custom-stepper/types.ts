export type CustomStepperProps = {
  steps: string[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  activeStep: number;
};

export type PrevNextStepProps = {
  onNextStep: () => void;
  onPrevStep: () => void;
  currentStep: number;
};
