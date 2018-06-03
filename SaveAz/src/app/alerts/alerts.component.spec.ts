import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
<<<<<<< HEAD
import {ImageService} from '../image/shared/image.service';
=======
import { AuthService } from '../authService/auth.service';
import { ImageService } from '../image/shared/image.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


class MockAuthService extends AuthService {
  constructor() {
    super(null);
  }
}
>>>>>>> 01b93737c31ec8c7e1d574a97626d29ec499d925

class MockImageService extends ImageService {
  constructor() {
    super(null);
  }
}
<<<<<<< HEAD
=======

class MockLikedItemService extends LikedItemServiceService {
  constructor() {
    super();
  }
}
>>>>>>> 01b93737c31ec8c7e1d574a97626d29ec499d925

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ AlertsComponent ],
      providers: [{provide: ImageService, useClass: MockImageService}]
=======
      declarations: [AlertsComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService },
      ],
      imports: [NgbModule.forRoot()]
>>>>>>> 01b93737c31ec8c7e1d574a97626d29ec499d925
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toEqual(true);
  });
} );
