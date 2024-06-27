import { useContext } from "react";
import { TruexContext } from "./TruexContext";

export const useTruex = () => {
    return useContext(TruexContext);
};
