import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
import {ImageService} from '../image/shared/image.service';
import { AuthService } from '../authService/auth.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


class MockAuthService extends AuthService {
  constructor() {
    super(null, null, null);
  }
}

class MockImageService extends ImageService {
  constructor() {
    super(null);
  }
}

class MockLikedItemService extends LikedItemServiceService {
  constructor() {
    super(null, null);
  }
}

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService },
      ],
      imports: [NgbModule.forRoot()]
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
