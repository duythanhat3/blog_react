import _ from 'lodash';
let language = localStorage.getItem('i18nextLng');
if(_.isEmpty(language)){
    language = 'en';
}


let lang = (function lang(_language) {
    switch (_language){
        case 'en' : return require('./locals/en/en.json');
        case 'vi' : return require('./locals/vn/vn.json');
        default : return require('./locals/en/en.json');
    }
})(language);

export const localization = language;

export default lang;