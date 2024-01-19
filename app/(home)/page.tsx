"use client";
import App from '@/components/App'
import { Provider } from 'react-redux'
import { store } from '@/redux/store/store';

export default function Home() {
  return (
    <Provider store={store}>
   < App/>
   </Provider>
  );
}
