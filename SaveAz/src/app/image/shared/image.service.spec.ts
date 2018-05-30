import { TestBed, inject } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import {ImageService} from './image.service';
import { } from 'jasmine';

// import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
// import { CustomHttpService } from './http.service';



describe('ImageService testing suite', () => {
  // let imgService: ImageService;
  // private http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService],
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));

  it('#getImages should return array of Items within an Observable',
    inject([ImageService],
      (imgService: ImageService) => {
    // imgService = new ImageService();
    // imgService.ImagesArray.value.push();
    expect(imgService.getImages()).toBeTruthy();//toBe(Observable<Item[]>);
  }));
});
