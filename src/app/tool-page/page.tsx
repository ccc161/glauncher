// MyContainer.tsx
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface MyContainerProps {
  children: React.ReactNode;
}

const MyContainer: React.FC<MyContainerProps> = ({ children }) => {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </>

  );
};

export default MyContainer;
