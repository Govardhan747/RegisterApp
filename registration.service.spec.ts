import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistrationService } from './registration.service';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './user';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let httpmock:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports:[FormsModule,HttpClientTestingModule],
     providers:[]
    }).compileComponents();
    service = TestBed.inject(RegistrationService);
    // TestBed.overrideProvider(HttpClient,{useValue:httpClient})
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
//   it('should send a login request', () => {
//      const user: User = {
//        password: 'password',
//        lastName: '',
//        emailId: 'example@gmail.com',
//        id: 0,
//        firstName: ''
//      };
//      const dummyResponse = 'Login successful';
//       service.loginUserFromRemote(user).subscribe(response => {
//          expect(response).toEqual(dummyResponse);
//         });
       
//   });
// it('should send a register request',()=>{
//   const user:User={
//     password: 'password',
//     lastName: 'lastname',
//     emailId: 'example@gmail.com',
//     id: 0,
//     firstName: 'firstname'
//   };
//   const dummyResponse = 'receieved';
//   service.registerUserFromRemote(user).subscribe(Response=>{
//     expect(Response).toEqual(dummyResponse);
//   });
// })

});
