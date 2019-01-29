import Building from "./building.store";
import Auth from './auth.store';
import ClassRoom from "./classroom.store";

export default APP_STORE={
    building : new Building(),
    auth:new Auth(),
    classroom:new ClassRoom(),
}