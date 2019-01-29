import { observable, action } from "mobx";
import { getClassroom} from "../services/classroom";

export default class ClassRoom{
    @observable classroom= [];
    @observable loading=false;

    constructor(){
        this.fetchclassroom();
    }

    @action
    fetchclassroom() {
        this.loading=true;
        getClassroom(snpashort => {
            this.classroom = snpashort;
            this.loading=false;
        });
    }
}