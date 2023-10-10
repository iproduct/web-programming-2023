import { useState } from "react";

function useIsLoading() {
    const [isLoading, setLoading] = useState(false);
    const loader = (aPromise) => {
        setLoading(true);
        return aPromise.finally(() => setLoading(false))
    }
    return [isLoading, loader];
}

export default useIsLoading;