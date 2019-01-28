import Building from "./building.store";
import Auth from './auth.store';
import Institutes from "./institues.store";

export default APP_STORE={
    building : new Building(),
    auth:new Auth(),
    institutes : new Institutes(),
}