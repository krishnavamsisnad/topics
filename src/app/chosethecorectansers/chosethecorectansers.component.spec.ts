import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosethecorectansersComponent } from './chosethecorectansers.component';

describe('ChosethecorectansersComponent', () => {
  let component: ChosethecorectansersComponent;
  let fixture: ComponentFixture<ChosethecorectansersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosethecorectansersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosethecorectansersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
