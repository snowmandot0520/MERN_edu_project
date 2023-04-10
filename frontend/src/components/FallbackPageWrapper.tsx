import React, { useEffect, useMemo } from 'react';

import { usePageRoute } from 'src/hooks/usePageRoute';

interface PageWrapperProps {
    children?: React.ReactNode | React.ReactElement | any
}

export const FallbackPageWrapper: React.FC<PageWrapperProps> = ({ children }: PageWrapperProps) => {
    const { onLoad } = usePageRoute();

    const render = useMemo(() => children, [children]);

    useEffect(() => {
        onLoad(render);
    }, [onLoad, render]);

    return render;
};

export default FallbackPageWrapper;