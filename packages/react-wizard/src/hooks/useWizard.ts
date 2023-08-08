import type { WizardContextData } from '../types';

import { useContext } from 'react';

import { WizardContext } from '../Context';

export const useWizard = (): WizardContextData => useContext(WizardContext);
