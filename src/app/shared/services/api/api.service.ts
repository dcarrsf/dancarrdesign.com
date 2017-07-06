import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  // todo: load strings from external file
  public strings: {
    logo: 'DAN CARR',
    title: 'Senior Software Engineer',
    banner: 'WEB DEVELOPMENT & TRAINING',
    tag: 'Dan Carr Design'
  };
}
