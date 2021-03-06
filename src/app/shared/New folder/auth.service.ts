import {Injectable, Inject} from "@angular/core";
import {AppConfig} from "../../app/app.module";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";


interface auth{
  email:string,
  password:string
}

@Injectable()

export class AuthService {

  constructor(@Inject ('APP_CONFIG_TOKEN') private config:AppConfig, private http:Http){
      console.log(this.config)
  }

  login(formData:auth):Observable<Response>{
    return this.http.post(
      `${this.config.BASE_URL}/api/v1/auth/login`,
      JSON.stringify(formData),
      {headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'sb-app-secret':this.config.APP_SECRET})})
  }
}
