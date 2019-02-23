import Building from "./building.store";
import Auth from './auth.store';
import Institutes from "./institues.store";
import Schedule from "./schedule.store";
import Room from "./room.store";
import Floor from "./floor.store";
import Profile from "./profile.store";
import ListSchedule from "./listSchedule.store";

export default APP_STORE={
    building : new Building(),
    auth:new Auth(),
    institutes : new Institutes(),
    schedule:new Schedule(),
    room:new Room(),
    floor:new Floor(),
    profile: new Profile(),
    listschedule: new ListSchedule(),
}