import React, { ReactNode } from 'react';
import { useTimedown } from '../hooks/useTimedown';
import { UseTimedownProps, UseTimedownReturn } from '../types';

export interface TimedownProps extends UseTimedownProps {
  children: (timedown: UseTimedownReturn) => ReactNode;
}

/**
 * Headless Timedown component that provides render props pattern
 * for complete UI control
 */
export const Timedown = (props: TimedownProps): React.ReactElement => {
  const { children, ...timedownProps } = props;
  
  const timedown = useTimedown(timedownProps);
  
  return <>{children(timedown)}</>;
};

