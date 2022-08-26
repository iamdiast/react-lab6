import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout} from 'antd' 

import Home from './conainers/home/Home';
import MenuComponent from './components/menu/Menu';

import 'antd/dist/antd.css'
import './App.css';

import { Menu } from 'antd';
import Products from './conainers/products/Products';

const {Sider} = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
    return (
         <Layout
      style={{
        minHeight: '100vh',
      }}
    >
   <Sider 
   collapsible 
   collapsed={collapsed} 
   onCollapse={(value) => setCollapsed(value)}>
      <MenuComponent />
      </Sider>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
    </Routes>
    </Layout>
    
  );
}

export default App;
