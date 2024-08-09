import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  //native elements -- get the elelments from the dom
  //debug elelemtns -- get the elements of the angualr things exceptionally

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should show title', () => {
    expect(component.title).toBe('gk');
  });
  fit('check the title in html', () => {
    fixture.detectChanges();
    var myEle = fixture.nativeElement;
    expect(myEle.querySelector('h2').textContent).toContain('gk');
  });
  fit('check for the param tags', () => {
    var paraElements = debugElement.queryAll(By.css('p'));
    expect(paraElements[1].nativeElement.textContent).toBe('ans');
  });
  fit('check for the button', () => {
    // var paraElements = debugElement.queryAll(By.css('.mybtn'))
    // expect(paraElements[0].nativeElement.disabled).toBeTrue
    const buttonElements = debugElement.queryAll(By.css('.mybtn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
  });
  fit('check for the even', () => {
    var header = new HeaderComponent();
    var result = header.karth(2);
    expect(result).toBe('even');
  });
  fit('check for the even', () => {
    var header = new HeaderComponent();
    var result = header.karth(3);
    expect(result).toBe('odd');
  });
  fit('should have the correct image URL', () => {
    const imgElement = fixture.debugElement.query(By.css('.myimg'));
    const src = imgElement.nativeElement.src;
    const expectedUrl =
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hyundai.com%2Fin%2Fen&psig=AOvVaw1FmyUt1VW0TJsOLxcsPxx9&ust=1723188238792000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjqjMnu5IcDFQAAAAAdAAAAABAJ';

    expect(src).toBe(expectedUrl);
  });
  fit('should call karth method on TEST button click', () => {
    spyOn(component, 'karth');

    const testButton = fixture.debugElement.query(By.css('button:not(.mybtn)'));

    testButton.triggerEventHandler('click', null);
    expect(component.karth).toHaveBeenCalledWith(2);
  });
  
});
