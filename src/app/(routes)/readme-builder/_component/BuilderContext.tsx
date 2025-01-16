import React, { createContext, ReactNode, useContext, useState } from "react";

import { READMETemplate, READMETemplateProps } from "../_data/READMETemplate";

type Props = {
    items: READMETemplateProps[];
    handleReorder: (order: READMETemplateProps[]) => void;
};

const BuilderProvider = createContext({} as Props);

export const useBuilder = () => {
    const context = useContext(BuilderProvider);
    if (!context) {
        throw new Error("useBuilder must be used within a BuilderProvider");
    }
    return context;
};

export const BuilderContext = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<READMETemplateProps[]>(READMETemplate);
    const handleReorder = (order: READMETemplateProps[]) => {
        setItems(order);
    };

    return <BuilderProvider.Provider value={{ items, handleReorder }}>{children}</BuilderProvider.Provider>;
};
