// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseAppConfig } from '@angular/fire';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCz-h1TCcMNvCsoG7hcTHhQvdkZwg8uZQg',
    authDomain: 'sweetica.firebaseapp.com',
    databaseURL: 'https://sweetica.firebaseio.com',
    projectId: 'sweetica',
    storageBucket: 'sweetica.appspot.com',
    messagingSenderId: '403532437091',
    appId: '1:403532437091:web:a523e0d755c0f854930a56',
    measurementId: 'G-PPXSRF93DC'
  } as FirebaseAppConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
