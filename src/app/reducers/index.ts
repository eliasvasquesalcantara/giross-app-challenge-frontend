import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { historyReducer } from '../state/history.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  history: historyReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
