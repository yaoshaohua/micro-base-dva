import React from 'react';
import { start } from 'qiankun';

class MicroPage extends React.Component {
  componentDidMount() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  }
  render() {
    return (
      <div id="micro-vue3" />
    );
  }
}

export default MicroPage;
