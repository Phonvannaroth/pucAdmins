import { observable, action } from "mobx";
import { getBuilding } from "../services/building";
import { getClassroom } from "../services/classroom";

export default class Building{
    @observable building= [];
    @observable selectedBuilding = null;
    @observable classroo
    @observable loading=false;
    @observable classroom =[];
    @observable floors =[];
    @observable selectedFloor=null;
    @observable datasource =[];

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
    @action
    fetchSelectedBuilding(item){
        this.selectedBuilding = item;
    }

    @action
    fetchClassRoom(){
        this.loading = true;
        getClassroom(this.selectedBuilding.key,(classroom,floor) =>{
            this.classroom = classroom;
            this.datasource=classroom;
            this.floors=floor;
            this.loading = false})
    }

    @action
    fetchRoomByFloor(floor){
        this.selectedFloor=floor;
        this.classroom=this.datasource.slice().filter(m=>m.floor.key===floor.key)
    }
}