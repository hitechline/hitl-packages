import type { WizardProps } from '../types';

import { clsx } from 'clsx';

import { WizardProvider } from '../Context';

export const Wizard = ({
  children,
  className,
  ...props
}: WizardProps): JSX.Element => (
  <WizardProvider>
    <div {...props} className={clsx('wizard', className)}>
      {children}
    </div>
  </WizardProvider>
);
