import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompounentComponent } from './childcompounent.component';

describe('ChildcompounentComponent', () => {
  let component: ChildcompounentComponent;
  let fixture: ComponentFixture<ChildcompounentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildcompounentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcompounentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
