import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoopComponent } from './liste-coop.component';

describe('ListeCoopComponent', () => {
  let component: ListeCoopComponent;
  let fixture: ComponentFixture<ListeCoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
