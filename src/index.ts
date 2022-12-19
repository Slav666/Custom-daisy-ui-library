import 'tailwindcss/tailwind.css';
import './index.css';
import { ButtonProps as TButtonProps } from './components/button.component';

// export * from './components/button.component';
// export { default as Button } from './components/button.component';

export { useInterval, useTimeout, useLocalStorage } from './hooks';
// Actions > Button
export { default as Button } from './components/button.component';

export type ButtonProps = TButtonProps;
