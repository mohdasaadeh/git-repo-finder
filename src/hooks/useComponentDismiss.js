import { useEffect } from 'react';

const useComponentDismiss = (component, actionFn) => {
  useEffect(() => {
    const onBodyClick = event => {
      if (component.current.contains(event.target)) {
        return;
      }

      actionFn();
    };

    document.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.removeEventListener('click', onBodyClick, {
        capture: true
      });
    };
  });
};

export default useComponentDismiss;
