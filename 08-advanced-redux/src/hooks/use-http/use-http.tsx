import { useCallback, useState } from "react";

type RequestConfig = {
    url: string;
    method?: string | undefined;
    headers?: HeadersInit | undefined;
    body?: any | null;
};
type ApplyData = (data: any) => void;
interface IUseHtpp {
    isLoading: boolean;
    error: string | null;
    status: string | null;
    sendRequest: (
        requestConfig: RequestConfig,
        applyData: ApplyData
    ) => Promise<void>;
}
const useHttp = (): IUseHtpp => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const sendRequest = useCallback(
        async (requestConfig: RequestConfig, applyData: ApplyData) => {
            setIsLoading(true);
            setError(null);
            setStatus(null);
            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method || "GET",
                    headers: requestConfig.headers || {},
                    body: requestConfig.body
                        ? JSON.stringify(requestConfig.body)
                        : null,
                });
                if (!response.ok) {
                    console.log(response);
                    throw new Error("Request failed!");
                }

                setStatus("worked!");
                const data = await response.json();
                console.log(data);
                applyData(data);
            } catch (err) {
                setError((err as Error).message || "Something went wrong!");
            }
            setIsLoading(false);
        },
        []
    );
    return {
        isLoading,
        error,
        sendRequest,
        status: status,
    };
};
export default useHttp;
