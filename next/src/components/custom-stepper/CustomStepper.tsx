import { QontoConnector, QontoStepIcon } from "@/components/custom-step-icon";
import { Step, StepLabel, Stepper } from "@mui/material";
import { CustomPrevNext } from "./CustomPrevNext";
import { CustomStepperProps } from "./types";

// ----------------------------------------------------------------------

export const CustomStepper = ({
  steps,
  activeStep,
  handleNextStep,
  handlePreviousStep,
}: CustomStepperProps) => {
  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel StepIconComponent={QontoStepIcon}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <CustomPrevNext
        currentStep={activeStep}
        onNextStep={handleNextStep}
        onPrevStep={handlePreviousStep}
      />
    </>
  );
};

export default CustomStepper;
