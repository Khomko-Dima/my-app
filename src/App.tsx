import React from 'react';
import './App.sass';
import {Button} from "antd";
import {ConfigProvider} from "antd";
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';
ConfigProvider.config({
    theme: {
        primaryColor: '#25b864',
    },
});

function App() {


  return (
      <ConfigProvider locale={ruRu} >
          <div className="App test">
              <Button type={"primary"}>sdasd</Button>
          </div>
      </ConfigProvider>
  );
}

export default App;
