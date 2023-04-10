import { useCallback, useContext } from 'react';

import { FallbackContext, FallbackType } from 'src/providers/FallbackProvider';

export const usePageRoute = (): any => {
    const { updateFallback } = useContext(FallbackContext);

    const onLoad = useCallback(
        (component: FallbackType | undefined) => {
            if (component === undefined) {
                component = null;
            }
            updateFallback(component);
        },
        [updateFallback]
    );

    return { onLoad };
};

export default usePageRoute;
