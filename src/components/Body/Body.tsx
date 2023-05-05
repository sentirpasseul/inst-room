import { Children, cloneElement, ReactNode } from "react";

type BodyProps = {
    children: ReactNode;
    className?: string;
}

const Body = ( { children, className }: BodyProps) => (
    <div>
      {children}
    </div>
);

export default Body
    

