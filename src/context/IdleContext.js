import { createContext, useContext } from "react";

export const IdleContext = createContext({
    resetIdle: () => {},
});

// 자식 컴포넌트용 훅
export const useIdle = () => useContext(IdleContext);
