"use client";

import React from "react";
import QueryProviders from "./query-providers";
import AntdProvider from "./antd-provider";

const AppProviders = ({ children }) => {
  
  return (
    <QueryProviders>
      <AntdProvider>
          {children}
      </AntdProvider>
    </QueryProviders>
  );
};

export default AppProviders;
