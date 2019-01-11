import { observable, action } from "mobx";
import { getBuilding } from "../services/building";

export default class Building{
    @observable building= [];
    @observable loading=false;

    constructor(){
        this.fetchbuilding();
    }

    @action
    fetchbuilding() {
        this.loading=true;
        getBuilding(snpashort => {
            this.building = snpashort;
            this.loading=false;
        });
    }
}