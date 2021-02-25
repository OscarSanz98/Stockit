import Realm from 'realm';
var dotenv = require('dotenv');
dotenv.config();

export function getRealmApp() {

    const appId = process.env.REACT_APP_REALM_ID;
    const appConfig = {
        id: appId,
        timeout: 10000,
    };


    return new Realm.App(appConfig);
}