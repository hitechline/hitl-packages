import type { WizardStepsProps } from '../types';

import { clsx } from 'clsx';
import { useEffect } from 'react';

import { useWizard } from '../hooks/useWizard';

export const WizardSteps = ({
  children,
  className,
  ...props
}: WizardStepsProps): JSX.Element => {
  const { current, getStep, registerSteps } = useWizard();

  useEffect(() => {
    registerSteps(children);
  }, [children, registerSteps]);

  return (
    <div {...props} className={clsx('wizard-steps', className)}>
      {getStep(current)}
    </div>
  );
};
