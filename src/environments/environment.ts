// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCobo_riZQ-tAM__G4P2jbRkQr0gkx5KpA",
    authDomain: "metmuseum-6a019.firebaseapp.com",
    projectId: "metmuseum-6a019",
    storageBucket: "metmuseum-6a019.appspot.com",
    messagingSenderId: "625141152548",
    appId: "1:625141152548:web:f916e4dc9d6a663af251b1"
  },
  endpointArtObject: 'https://collectionapi.metmuseum.org/public/collection/v1/objects/',
  
  endpointCollections: 'https://collectionapi.metmuseum.org/public/collection/v1/departments',
  endpointCollection: 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=',
  endpointSearch: 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
