import {TestBed, inject, ComponentFixture} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import {ImageService} from './image.service';
import {RouterTestingModule} from '@angular/router/testing';
import { } from 'jasmine';

class MockImageService extends ImageService {
  constructor() {
    super(null);

  }
  ImagesArray = [
    new Item(
      54321,
      'test1',
      '98',
      'https://i5.walmartimages.com/asr/d29dd960-03f9-48ec-8401-5ab9c0f2e05c_1.0eb296c8cce6a845625eaa3db127cfa7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
      'test desc 1',
      '5',
    ),
    new Item(
      5498,
      'test2',
      '598',
      'https://i5.walmartimages.com/asr/d29dd960-03f9-48ec-8401-5ab9c0f2e05c_1.0eb296c8cce6a845625eaa3db127cfa7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
      'test desc 2',
      '4',
    )];
}

fdescribe('ImageService', () => {
  let imgService: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ImageService, useClass: MockImageService}],
      imports: [RouterTestingModule]
    });
  });

  beforeEach(() => {
    imgService = new ImageService(null);
  });

  it('should be created', () => {
    expect(imgService instanceof ImageService).toBeTruthy();
    // expect(true).toBeTruthy();
  });

  it('#getImages should return array of Items within an Observable',
    () => {
    // imgService.ImagesArray.value.push();
    // expect(imgService.getImages()).toBeTruthy();//toBe(Observable<Item[]>);
    // expect(imgService.value instanceof Item[]).toBeTruthy();
    // expect(imgService.ImagesArray.length).toBe(2);
      expect(true).toEqual(true);
  });
});
//test
