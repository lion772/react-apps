import React, { FC, useCallback, useState } from "react";
import styles from "./use-http.module.css";

type RequestConfig = {
    url: string;
    method?: string | undefined;
    headers?: HeadersInit | undefined;
    body?: any | null;
};

const useHttp = (
    requestConfig: RequestConfig,
    applyData: (data: any) => void
): {
    isLoading: boolean;
    error: string | null;
    sendRequest: (taskText?: string | undefined) => Promise<void>;
} => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const sendRequest = async (taskText?: string | undefined) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();

            applyData(data);

            //setTasks(loadedTasks);
        } catch (err) {
            setError((err as Error).message || "Something went wrong!");
        }
        setIsLoading(false);
    };
    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
