import { createReducer, on } from '@ngrx/store';
import { Cep } from '../utilities/types/cep';
import { addToHistory } from './history.actions';

export type CepHistory = Cep & {
  datetime: Date;
  radiusInKm: number;
};

export interface HistoryState {
  ceps: CepHistory[];
}

export const initialState: HistoryState = {
  ceps: [],
};

export const historyReducer = createReducer(
  initialState,
  on(addToHistory, (state, { cep }) => {
    return {
      ceps: [...state.ceps, { ...cep, datetime: new Date() }],
    };
  })
);
