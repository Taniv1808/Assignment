import {
    MOVIES_API,
  } from '../../config/urls';
import { apiGet, apiPost } from '../../utils/utils';

export function movies(data) {
    return new Promise((resolve, reject) => {
      apiPost(MOVIES_API, data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  
  