import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  // todo: load strings from external file
  public get strings() {
    return {
      logo: 'Dan Carr',
      title: 'Senior Software Engineer',
      banner: 'Web Development & Training',
      tag: 'Dan Carr Design'
    };
  };
}
