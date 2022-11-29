import { useState, useEffect } from "react";

let globalState = {};
let listeners: any = [];
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter((li: any) => li !== setState);
        };
    }, [setState]);
};
