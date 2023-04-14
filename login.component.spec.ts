import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule, HttpClientTestingModule],
      providers:[HttpClient]
    })
    .compileComponents();
    const service = TestBed.inject(RegistrationService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should nagative to registerpage',()=>{
    spyOn(component['router'],'navigate');
    component.gotoRegister();
    expect(component['router'].navigate).toHaveBeenCalledWith(['gotoRegister']);
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should define the goto function', () => {
    expect(component.gotoRegister).toBeDefined();
  });
  it('should define the registerUser function', () => {
    expect(component.loginUser).toBeDefined();
  });
  it('should register function called', () => {
    const user: User = {
      firstName: '',
      lastName: '',
      emailId: 'govardhan@gmail.com',
      password: '1234',
      id: 0,
    };
    spyOn(console, 'log');
    component.loginUser();
    console.log('Login successful');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
