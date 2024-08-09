// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { CalcService } from './calc.service';
// import { HomeComponent } from './components/home/home.component';
// import { DataService } from './data.service';
// import {HttpClientTestingModule,HttpTestingController} from'@angular/common/http/testing'
// import { USERS } from './mock_data/users';

// // describe('AppComponent', () => {
// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       imports: [AppComponent],
// //     }).compileComponents();
// //   });

// //   it('should create the app', () => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.componentInstance;
// //     expect(app).toBeTruthy();
// //   });

// //   it(`should have the 'debugtest' title`, () => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.componentInstance;
// //     expect(app.title).toEqual('debugtest');
// //   });

// //   // it('should render title', () => {
// //   //   const fixture = TestBed.createComponent(AppComponent);
// //   //   fixture.detectChanges();
// //   //   const compiled = fixture.nativeElement as HTMLElement;
// //   //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, debugtest');
// //   // });
// // });

// describe("app Describe" ,()=>{
//   //if we use fit instead of it only those component test cases will be visisble
//   //if we type xit instead of that all will run
//   // before each that piece of code executes before each of the things
//   //anyhting you want to insistalaise you want to use then you can use the before each
//   //after you want to disconnect you can use the aftereach
//   var home : HomeComponent
//   var calc : CalcService
//   var data : DataService
//   let testingController : HttpTestingController
//   beforeEach(()=>{
//     console.log("before each method")
//     TestBed.configureTestingModule({
//       imports : [HttpClientTestingModule],
//       providers:[HomeComponent,CalcService,DataService]
//     })
//     home = new HomeComponent()
//     calc = TestBed.inject(CalcService)
//     home = TestBed.inject(HomeComponent)
//     data = TestBed.inject(DataService)
//     testingController = TestBed.inject(HttpTestingController)
//   })
//   it("maultiply numbers from services",()=>{
//     var myservice = new CalcService()
//     var result  = myservice.multiply(4,5)
//     expect(result).toBe(20)

//   })
//   it("adding numbers",()=>{
//     var home = new HomeComponent()
//     var result = home.addNumbers(2,3)
//     expect(result).toBe(5)
//   })
//   it("spying on the getData method",()=>{
//     var spyMethod = spyOn(calc,'getData').and.returnValue('fake data')
//     var result = calc.getData()
//     expect(spyMethod).toHaveBeenCalled()
//     expect(result).toBe("fake data")
//   })
//   it("spying on the  at method",()=>{
//     var spymethod = spyOn(calc,'atmethod').and.returnValue('original value')
//     var result = calc.atmethod()
//     expect(spymethod).toHaveBeenCalled()
//     expect(result).toBe("Original Data")
//     })
//   it("spying on the Multiply return value",()=>{
//     var spymEthod = spyOn(calc,'multiply').and.returnValue(20)
//     var result = calc.multiply(4,5)
//     expect(spymEthod).toHaveBeenCalled()
//     expect(result).toBe(20)
//   })
//   it("spying on the addition return value",()=>{
//     var sp = spyOn(home,'addNumbers').and.returnValue(5)
//     var res = home.addNumbers(2,3)
//     expect(sp).toHaveBeenCalled()
//     expect(res).toBe(5)

//   })
//  it("httpTest-getting all the users",()=>{
//   const  mock_data = testingController.expectOne('api/users');
//   expect(mock_data.request.method).toBe('GET');
//   mock_data.flush(Object.values(USERS));

//  data.getAllusers().subscribe((USERS:any)=>{
//     expect(USERS).toBeTruthy();
//     expect(USERS.length).toBe(6);
//     const secondUser = USERS.find((myuser:any)=>myuser.id == 2);
//     expect(secondUser.name).toBe("gopu karthik");

//   });


//  })
  

// })
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalcService } from './calc.service';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mock_data/users';
import { GradePipe } from './grade.pipe';

describe("App Describe", () => {
  let home: HomeComponent;
  let calc: CalcService;
  let data: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    console.log("before each method");
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeComponent, CalcService, DataService]
    });
    calc = TestBed.inject(CalcService);
    home = TestBed.inject(HomeComponent);
    data = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it("multiplies numbers from service", () => {
    const result = calc.multiply(4, 5);
    expect(result).toBe(20);
  });

  it("adds numbers", () => {
    const result = home.addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it("spies on the getData method", () => {
    const spyMethod = spyOn(calc, 'getData').and.returnValue('fake data');
    const result = calc.getData();
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe("fake data");
  });

  it("spies on the at method", () => {
    const spyMethod = spyOn(calc, 'atmethod').and.returnValue('Original Data');
    const result = calc.atmethod();
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe("Original Data");
  });

  it("spies on the multiply return value", () => {
    const spyMethod = spyOn(calc, 'multiply').and.returnValue(20);
    const result = calc.multiply(4, 5);
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe(20);
  });

  it("spies on the addNumbers return value", () => {
    const spyMethod = spyOn(home, 'addNumbers').and.returnValue(5);
    const result = home.addNumbers(2, 3);
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe(5);
  });

  it("httpTest-getting all the users", () => {
    data.getAllusers().subscribe((USERS: any) => {
      expect(USERS).toBeTruthy();
      expect(USERS.length).toBe(6);
      const secondUser = USERS.find((myuser: any) => myuser.id === 2);
      expect(secondUser.name).toBe("gopu karthik");
    });

    const mockRequest = testingController.expectOne('api/users');
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(Object.values(USERS));
  });
  describe('GradePipe', () => {
    let gpipe: GradePipe;
   
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GradePipe]
      });
   
      gpipe = TestBed.inject(GradePipe);
    });
   
    fit('should correctly transform the grade to a color A with green color', () => {
      const result = gpipe.transform(94);
      expect(result.grade).toBe('A');
      expect(result.color).toBe('green');
    });
   
    fit('should correctly transform the grade to a color B with blue color', () => {
      const result = gpipe.transform(80);
      expect(result.grade).toBe('B');
      expect(result.color).toBe('blue');
    });
  });
   

});
