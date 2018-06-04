import { TestBed, async } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { AuthService } from '../authService/auth.service';
import { ImageService } from '../image/shared/image.service';
import { LikedItemServiceService } from '../liked-item-service.service';



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

describe('GalleryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService },
      ],
      declarations: [
        GalleryComponent
      ],
    }).compileComponents();
  }));

  //it('should create the component', async(() => {
  //  expect(GalleryComponent).toBeDefined();
  //}));
  it('should complete a boolean',  () => {
    expect(true).toEqual(true);
  });
});
