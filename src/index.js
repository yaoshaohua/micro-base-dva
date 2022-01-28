import dva from 'dva';
import { browserHistory } from 'dva/router';
import { registerMicroApps } from 'qiankun';
import 'font-awesome/less/font-awesome.less';
import './index.html';
import './global.scss';

const app = dva({
  history: browserHistory,
  onError(e) {
    console.log(e.message);
  },
});

// router
app.router(require('./router'));

app.start('#root');

// const entry = process.env.NODE_ENV === 'production' ? '//micro-vue3.vercel.app' : '//localhost:9002';

console.log('NODE_ENV', process.env.NODE_ENV);

registerMicroApps(
  [
    {
      name: 'micro-vue3',
      entry: '//micro-vue3.vercel.app',
      container: '#micro-vue3',
      activeRule: '/micro-vue3/',
    },
  ],
  {
    beforeLoad: (app) => {
      console.log('before load app.name====>>>>>', app.name);
    },
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterMount: [
      (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          '[LifeCycle] after unmount %c%s',
          'color: green;',
          app.name,
        );
      },
    ],
  },
);

