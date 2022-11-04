import React, { FC, ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => <>{children}</>;

export default Wrapper;
