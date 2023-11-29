import { createAction, props } from '@ngrx/store';
import { Cep } from '../utilities/types/cep';

export const addToHistory = createAction(
  '[History Component] Add',
  props<{ cep: Cep & { radiusInKm: number } }>()
);
