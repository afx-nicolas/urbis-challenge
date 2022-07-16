import { useReducer } from 'react';
import { Credentials } from '../types';

const initialValue: Credentials = {
  email: '',
  password: '',
};

interface CredentialsReducerActions {
  type: 'updateEmail' | 'updatePassword' | 'clearEmail' | 'clearPassword';
  value?: string;
}

function credentialsReducer(
  state: Credentials,
  action: CredentialsReducerActions
) {
  switch (action.type) {
    case 'updateEmail':
      return { ...state, email: action.value || '' };
    case 'updatePassword':
      return { ...state, password: action.value || '' };
    case 'clearEmail':
      return { ...state, email: '' };
    case 'clearPassword':
      return { ...state, password: '' };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}

export default function useCredentials() {
  const [credentials, dispatch] = useReducer(credentialsReducer, initialValue);

  return { credentials, dispatch };
}
