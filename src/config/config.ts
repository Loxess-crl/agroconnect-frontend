import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environment/environment';

export const BASE_ENDPOINT = environment.baseUrl + '/api';
export const TOKEN_KEY = 'appagc';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY),
  }),
};
