import { observable, action } from "mobx";


export default class Profile{
    @observable selectedItem = [];

    @action
    fetchSelectedRoom(data){

        this.selectedItem = data;
    }


}