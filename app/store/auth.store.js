import { observable, action } from "mobx";
import { authStateChanged, signIn,getAccount,getBuilding, signOut } from "../services/auth";

export default class Auth{
    @observable user= null;
    @observable loading=false;
    @observable account=null;
    @observable process=false;
    @observable building=[];

    constructor(){
    }

    @action
    fetchAuthStateChange(callback) {
        this.process=true;
        authStateChanged(user => {
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
            this.process=false;
            callback(true,res)
        }).catch(error=>{
            this.process=false;
            callback(false,error)
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
    }

    @action
    logOut(callback){
        this.process=true;
        signOut().then(()=>{
            callback(true,null)
        }).catch(error=>{
            callback(false,error)
        })
    }
}