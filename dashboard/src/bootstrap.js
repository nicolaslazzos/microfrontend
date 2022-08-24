import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

export const mount = (element) => createApp(Dashboard).mount(element);

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dashboard-root-dev');

  if (element) mount(element);
}