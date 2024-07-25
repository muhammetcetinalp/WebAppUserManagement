import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KADSKATSComponent } from './kads-kats.component';

describe('KADSKATSComponent', () => {
  let component: KADSKATSComponent;
  let fixture: ComponentFixture<KADSKATSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ KADSKATSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KADSKATSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
