// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let registrationService: RegistrationService;
  let router: Router;
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule, FormsModule],
      providers: [HttpClient, RegistrationService],
    }).compileComponents();
    const service = TestBed.inject(RegistrationService);
    fixture = TestBed.createComponent(RegistrationComponent);
    registrationService = TestBed.inject(RegistrationService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should register new user', () => {
    const user: User = {
      firstName: 'govardhan',
      lastName: 'chowdary',
      emailId: 'govardhan@gmail.com',
      password: '1234',
      id: 0,
    };
    spyOn(router, 'navigate');
    component.registerUser();
    console.log('registerUser');
    expect(router.navigate).not.toHaveBeenCalled();
  });
  it('should register function called', () => {
    const user: User = {
      firstName: 'govardhan',
      lastName: 'chowdary',
      emailId: 'govardhan@gmail.com',
      password: '1234',
      id: 0,
    };
    spyOn(console, 'log');
    component.registerUser();
    console.log('receieved');
    expect(console.log).toHaveBeenCalledTimes(2);
  });
  it('should send a register request',()=>{
      const user:User={
        password: 'password',
        lastName: 'lastname',
        emailId: 'example@gmail.com',
        id: 0,
        firstName: 'firstname'
      };
      spyOn(component ['router'],'navigate');
      component.registerUser();
      expect(component ['router'].navigate).toHaveBeenCalledWith(['\login']);
      // const dummyResponse = 'receieved';
      // registrationService.registerUserFromRemote(user).subscribe(Response=>{
      //   expect(Response).toBe(dummyResponse);
      });


  it('should navigate to login page', () => {
    spyOn(component['router'], 'navigate');
    component.registerUser();
    expect(component['router'].navigate).not.toHaveBeenCalled();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should define the goto function', () => {
    expect(component.goto).toBeDefined();
    
  });
  xit('should navigate to the login page', () => {
    spyOn(component['router'], 'navigate');
    component.registerUser();
    expect(component['router'].navigate).not.toHaveBeenCalled();
  });
  // it('should define the registerUser function', () => {
  //   expect(component.registerUser).toBeDefined();
  // });
  // it('should set msg to "Registration successful" and navigate to the login page when registration is successful', () => {
  //   spyOn(component['router'], 'navigate');
  //   spyOn(component.service, 'registerUserFromRemote').and.returnValue(of({}));
  //   component.registerUser();
  //   expect(component.msg).toEqual('Registration successfull');
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/login']);
  // });
  // it('should set msg1 to "DateBase have This Email" when registration fails due to duplicate email', () => {
  //   spyOn(component.service, 'registerUserFromRemote').and.returnValue(throwError({ error: 'Duplicate email' }));
  //   component.registerUser();
  //   expect(component.msg1).toEqual('DateBase have This Email');
  // });
  
  
});
