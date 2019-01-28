import { observable, action } from "mobx";
import { database } from "react-native-firebase";
import { getInstitutes } from "../services/institutes";


export default class Institutes {
    @observable data = [];
    @observable loading = false;
    @observable processing = false;

    @action
    fetchInstitutes() {
        this.loading = true;
        getInstitutes(snapshot => {
            this.data = snapshot;
            this.loading = false
        })
    }

}