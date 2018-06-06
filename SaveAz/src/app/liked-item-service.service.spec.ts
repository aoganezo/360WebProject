import { async,ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LikedItemServiceService } from './liked-item-service.service';
import { AuthService } from '../app/authService/auth.service';
import { ImageService } from '../app/image/shared/image.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

class MockLikedItemService extends LikedItemServiceService {
  constructor() {
    super(null, null);
  }
}

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


fdescribe('LikedItemServiceService', () => {
  let component: LikedItemServiceService;
  let fixture: ComponentFixture<LikedItemServiceService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService }, LikedItemServiceService],
      declarations: [LikedItemServiceService],
      imports: [NgbModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedItemServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should be created', inject([LikedItemServiceService], (service: LikedItemServiceService) => {
  //  expect(service).toBeTruthy();
  //}));

  //it('should be created', () => {
   //expect(component.addLikedItem).toBeTruthy();
  //});

});
