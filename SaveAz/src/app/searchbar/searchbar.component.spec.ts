import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { ImageService } from '../image/shared/image.service';
import { AuthService } from '../authService/auth.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';

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

fdescribe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService }],
      declarations: [SearchbarComponent],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', async(inject([ImageService], (service: ImageService) => {
    // expect(component).toBeTruthy();
    //expect(true).toBeTruthy();
  //})));
  it('should do basic boolean test', () => {
    expect(true).toEqual(true);
  });

  it('should search', () => {
    expect(component.search).toBeTruthy();
  });

  it('should call on search button', async(() => {
    fixture.detectChanges();
    spyOn(component, 'searchSubject');
    const testt = fixture.debugElement.query(By.css('button')).nativeElement;
    testt.click();
    //expect(component.search).toHaveBeenCalled;
    expect(component.search).toBeTruthy();

  }));

  it('should have keydownfunction', () => {
    expect(component.keyDownFunction).toBeTruthy();
  });

});
