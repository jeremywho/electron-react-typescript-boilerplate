import * as React from "react";
import { FC } from "react";

export interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        <div className="header">
          <h1>My Applicationn</h1>
        </div>
      </div>
    </div>
  );
};
