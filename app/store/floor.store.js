import { observable, action } from "mobx";
import { getClassByBuilding } from "../services/building";
import { groupBy } from "../services/mapping";


export default class Floor{
    @observable selectedBuildingofData=[];
    @observable loading=false;
    @observable data=null;
    @observable floor=[];
    @observable room=[];

    @action
    fetchSelectedBuildingofData(building){
        this.selectedBuildingofData = building;
    }

    @action
    fetchData(termKey,day,time){
        this.loading=true;
        const {room}=this.selectedBuildingofData
        const {building}=room;
        getClassByBuilding(termKey,building.key,day,time,req=>{
            this.data=req;
            this.room=req;
            this.floor=groupBy(req,"room.floor.key","room.floor.name").map(m=>({...m.room.floor}));
            this.loading=false;
        })
    }

    @action
    fetchRoomByFloor(floorKey){
        this.data=this.room.filter(m=>m.room.floor.key===floorKey);
    }
}