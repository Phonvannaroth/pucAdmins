import { observable, action } from "mobx";
import { getBuilding } from "../services/building";

export default class Building {
    @observable building = [];
    @observable loading = false;

    @action
    fetchBuilding(campusKey) {
        this.loading = true;
        getBuilding(campusKey, snpashort => {
            this.building = snpashort;
            this.loading = false;
        });
    }
}