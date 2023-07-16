import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { NameComponent } from './name/name.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NameComponent,
        LoginComponent
      ],
      providers: [

      ]
    }).compileComponents();
  }));

  it('should create the Root app component app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the child name component app', async(() => {
    const fixture = TestBed.createComponent(NameComponent);
    const names = fixture.debugElement.componentInstance;
    expect(names).toBeTruthy();
  }));

  it('should create the logic componentapp', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const log = fixture.debugElement.componentInstance;
    expect(log).toBeTruthy();
  }));

  it(`should have the array value`, () => {
    const arr = ['car'];
    const str = 'car';
    const includedInArray = stringArrayContainsPartialStringMatch(arr, str);
    expect(includedInArray).toBe(true);
  });
  function stringArrayContainsPartialStringMatch(arr: string[], str: string) {
    return arr.filter((item) => item.includes(str)).length > 0;
  }
});

it('name check', ()=>{
  const fixture = TestBed.createComponent(AppComponent);
    const appTitle = fixture.debugElement.componentInstance;
    expect(appTitle.name).toEqual('Angular');
})

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular23 app is running!');
  // });


