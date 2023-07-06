import { useCallback } from 'react';
import { useCurrentPathContext } from '~/lib/react-router/Router';

type Push = (nextPath: string, state?: PopStateEventInit) => void;
/**
 * @property push - Move to path with state
 */
const useRouter = () => {
  const { currentPath } = useCurrentPathContext();

  const push: Push = useCallback(
    (nextPath, state) => {
      if (currentPath === nextPath) {
        return;
      }

      window.history.pushState(state, '', nextPath);
      window.dispatchEvent(new PopStateEvent('popstate', state));
    },
    [currentPath]
  );

  return { push };
};

export default useRouter;
