import React, { FC } from "react";

interface WrapperProps {
    children: any;
}

const Wrapper: FC<WrapperProps> = ({ children }) => <>{children}</>;

export default Wrapper;
