import { ColorMode } from './types';

export interface IContext {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
}
