import axios from "axios";

class AuthenticationService {

    executeBasicAuthService(username, password){
        return axios.get('http://localhost:8080/basicauth',
            {
                headers: {
                    Authorization:this.createBasicAuthToken(username, password)
                }
            }
        )
    }

    createBasicAuthToken(username, password){
        return 'BAsic ' + window.btoa(username +":"+password)
    }

    registerSuccessfulLogin(username, password){
        console.log("registerSuccessfulLogin...")
        // let basicAuthHeader = 'BAsic ' + window.btoa(username +":"+password)
        sessionStorage.setItem("authenticatedUser", username)
        this.axiosInterceptor(this.createBasicAuthToken(username, password));
    }

    logout(){
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("authenticatedUser");
        if(user === null) return false

        return true;
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem("authenticatedUser");
        if(user === null) return false

        return user;
    }

    axiosInterceptor(basicAuthHeader){
        // let username = 'rishabh22'
        // let password = 'dummy'
        // let basicAuthHeader = 'BAsic ' + window.btoa(username +":"+password)
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.Authorization = basicAuthHeader
                }
                return config;
            }
        
        )
    }
}
export default new AuthenticationService();