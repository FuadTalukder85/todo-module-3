import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl my-10 mx-auto">{children}</div>
  );
};

export default Container;
