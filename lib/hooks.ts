import type {SectionName} from './types';
import {useActiveSectionContext} from '@/context/active-section-context';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

export function useSectionInView(sectionName: SectionName, defaultThreshold = 0.2) {
  const threshold = defaultThreshold; // sectionName === 'Experience' ? 0.35 : sectionName === 'Projects' ? 0.15 : defaultThreshold;

  const {ref, inView} = useInView({
    threshold,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
