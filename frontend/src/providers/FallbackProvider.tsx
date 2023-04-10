import React, { createContext, useCallback, useMemo, useState } from 'react';

import ProgressBar from 'react-topbar-progress-indicator';

// Progress Bar -> Configuration
ProgressBar.config({
    barColors: {
        '0': '#fff86d',
        '1.0': '#fff86d',
    },
    shadowBlur: 0,
    barThickness: 4,
});

export type FallbackType = NonNullable<React.ReactNode> | null;

export interface FallbackContextType {
    updateFallback: (fallbackElement: FallbackType) => void;
}

export const FallbackContext = createContext<FallbackContextType>({
    updateFallback: () => { },
});

interface FallbackProviderProps {
    children: React.ReactNode | React.ReactElement | null
}

export const FallbackProvider: React.FC<FallbackProviderProps> = ({
    children,
}) => {
    const [fallback, setFallback] = useState<FallbackType>(null);

    const updateFallback = useCallback((fallbackElement: FallbackType) => {
        setFallback(() => fallbackElement);
    }, []);

    const renderChildren = useMemo(() => children, [children]);

    return (
        <FallbackContext.Provider value={{ updateFallback }}>
            <React.Suspense
                fallback={<><ProgressBar />{fallback}</>}
            >
                {renderChildren}
            </React.Suspense>
        </FallbackContext.Provider>
    );
};