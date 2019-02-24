
import { observable, action } from "mobx";
import {  getSchedule } from "../services/schedule";
import { settings } from "../dummy/settings";
import { setCheckIn } from "../services/room.services";
import { groupBy, groupByDesc } from "../services/mapping";

export default class ListSchedule{
    @observable data= [];
    @observable checkedData= [];
    @observable building= [];
    @observable loading=false;
    @observable refresh=false;
    @observable done=false;
    @observable fetching=false;
    lastVisible=null;


    @action
    fetchData(termKey,campusKey,time,day) {
        
        this.loading=true;
        getSchedule(termKey,campusKey,time,day,snpashort => {
            this.building=groupBy(snpashort,"room.building.key","room.building.name")
           
            if(snpashort.length>=settings.Size){
                this.lastVisible=snpashort[snpashort.length-1];
                this.done=false;
            }
            else{
                this.lastVisible=null;
                this.done=true;
            }
            this.data = snpashort;
            this.loading=false;
        });
    }

    @action
    fetchCheckedData(termKey,campusKey,time,day) {
        this.loading=true;
        getSchedule(termKey,campusKey,0,day,snpashort => {
            this.building=groupBy(snpashort,"room.building.key","room.building.name")
            if(snpashort.length>=settings.Size){
                this.lastVisible=snpashort[snpashort.length-1];
                this.done=false;
            }
            else{
                this.lastVisible=null;
                this.done=true;
            }
            this.checkedData = groupByDesc(snpashort,"page_key","page_key");
            this.loading=false;
        });
    }

    @action
    checkIn(item,callback){
        this.process=true;
        setCheckIn(item).commit().then(()=>{
            callback(true)
            this.process=false;
        }).catch(error=>{
            alert(error);
            callback(false)
            this.process=false;
        })
    }

    
}