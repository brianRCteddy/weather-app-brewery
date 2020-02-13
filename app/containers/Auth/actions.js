/*
 *
 * Auth actions
 *
 */

import { INIT_AUTH, SUCCESS_AUTH, ERROR_AUTH } from './constants';

export function initAuth() {
  return {
    type: INIT_AUTH,
  };
}

export function successAuth(authData) {
  return {
    type: SUCCESS_AUTH,
    authData,
  };
}

export function errorAuth(error) {
  return {
    type: INIT_AUTH,
    error,
  };
}
