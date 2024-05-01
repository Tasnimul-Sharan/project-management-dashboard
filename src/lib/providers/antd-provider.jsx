import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#770099",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
