"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";

export default function StoreProvider({ children }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
