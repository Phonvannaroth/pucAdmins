import { observable, action } from "mobx";
import { authStateChanged, signIn,getAccount,getBuilding, signOut } from "../services/auth";
import { getEnvironment } from "../services/environment";

export default class Auth{
    @observable user= null;
    @observable loading=false;
    @observable account=null;
    @observable process=false;
    @observable building=[];
    @observable campus=null;
    @observable config=null;
    @observable term=null;

    @action
    fetchAuthStateChange(callback) {
        this.process=true;
        authStateChanged(user => {
            if(user){
                const {uid}=user;
                this.user = user;
                getAccount(uid,res=>{
                    this.account=res;
                    const {campus,program}=res;
                    this.campus=campus;
                    getEnvironment(program.key,config=>{
                        this.config=config;
                        const {term}=config;
                        this.term=term;
                        this.process=false;
                        callback(true,res)
                    })
                })
            }
            else{
                this.user=null;
                this.process=false;
                callback(false,null)
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
    }

    @action
    logOut(){
        this.process=true;
        signOut().then(()=>{
            this.process=false;
            // callback(true,null)
        }).catch(error=>{
            this.process=false;
            // callback(false,error)
        })
    }
   
}