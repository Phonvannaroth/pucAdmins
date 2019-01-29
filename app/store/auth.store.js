import { observable, action } from "mobx";
import { authStateChanged, signIn,getAccount,getBuilding, signOut, getClassroon } from "../services/auth";

export default class Auth{
    @observable user= null;
    @observable loading=false;
    @observable account=null;
    @observable process =false;
    @observable building=[];
    @observable classroom=[];

    constructor(){
    }

    @action
    fetchAuthStateChange(callback) {
        this.process=true;
        authStateChanged(user => {
            this.process=true;
            if(user){
                const {uid}=user;
                this.user = user;
                getAccount(uid,res=>{
                    this.account=res;
                    this.process=false;
                    callback(true,res)
                })
            }
            else{
                this.user=null;
                this.process=false;
                callback(user)
            }
        });
    }

    @action
    logIn(email,password,callback){
        this.process=true;
        signIn(email,password).then(res=>{
            callback(true,res)
            this.process=false;
        }).catch(error=>{
            callback(false,error)
            this.process=false;
        })
    }

    @action
    fetchBuilding(){
        this.loading=true;
        const {campus}=this.account;
        getBuilding(campus.key,res=>{
            this.building=res;
            this.loading=false;
        })
    } @action
    fetchclassroom(){
        this.loading=true;
        const {classroom}=this.account;
        getClassroom(classroom.key,res=>{
            this.classroom=res;
            this.loading=false;
        })
    }


    @action
    logOut(callback){
        this.process=true;
        signOut().then(()=>{
            this.process=false;
            callback(true,null)
        }).catch(error=>{
            this.process=false;
            callback(false,error)
        })
    }
}