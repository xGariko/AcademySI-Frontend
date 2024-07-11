import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactFormComponent } from './conctact-form.component';

describe('ConctactFormComponent', () => {
  let component: ConctactFormComponent;
  let fixture: ComponentFixture<ConctactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConctactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConctactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
