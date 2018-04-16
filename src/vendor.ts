import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import 'jquery';
// import 'mdi/css/materialdesignicons.css';
import * as WebFont from 'webfontloader';
// import 'bootstrap/js/dist/collapse';
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeLight from '@fortawesome/fontawesome-pro-light';
import fontawesomeSolid from '@fortawesome/fontawesome-pro-solid';
import fontawesomeRegular from '@fortawesome/fontawesome-pro-regular';
fontawesome.library.add(fontawesomeLight);
fontawesome.library.add(fontawesomeSolid);
fontawesome.library.add(fontawesomeRegular);



WebFont.load({
  google: {
    families: [
      'Source Sans Pro:300,400,600,700'
    ]
  }
});
