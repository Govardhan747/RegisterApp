import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationService } from '../registration.service';
import { WellcomeComponent } from './wellcome.component';

describe('WellcomeComponent', () => {
  let component: WellcomeComponent;
  let fixture: ComponentFixture<WellcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeComponent ],
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientModule,FormsModule],
      providers:[HttpClient,RegistrationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to login page', () => {
    spyOn(component['router'], 'navigate');
    component.goto();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should define the goto function', () => {
    expect(component.goto).toBeDefined();
  });
  it('should define the wellcomeUser function', () => {
    expect(component.goto).toBeDefined();
  });
});