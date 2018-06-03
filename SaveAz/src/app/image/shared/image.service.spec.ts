import {TestBed, inject, ComponentFixture} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import {ImageService} from './image.service';
import {RouterTestingModule} from '@angular/router/testing';
import { } from 'jasmine';

class MockImageService extends ImageService {
  constructor() {
    super(null);
  }
  ImageArray = [
    new Item({
        'id' : 54321,
        'name' : 'test1',
        'price' : '98',
        'url' : 'https://i5.walmartimages.com/asr/d29dd960-03f9-48ec-8401-5ab9c0f2e05c_1.0eb296c8cce6a845625eaa3db127cfa7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
        'description' : 'test desc 1',
        'rating' : '5',
      }),
    new Item({
      'id' : 6895,
      'name' : 'test2',
      'price' : '320',
      'url' : 'https://i5.walmartimages.com/asr/d29dd960-03f9-48ec-8401-5ab9c0f2e05c_1.0eb296c8cce6a845625eaa3db127cfa7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
      'description' : 'test desc 2',
      'rating' : '100',
    })
  ];

  public getContacts(): Observable<Array<Contact>> {
    return Observable.of(this.testContacts);
  }
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
    imgService = new ImageService();
  });

  it('should be created', () => {
    expect(imgService instanceof ImageService).toBeTruthy();
    // expect(true).toBeTruthy();
  });

  it('#getImages should return array of Items within an Observable',
    () => {
    // imgService = new ImageService();
    // imgService.ImagesArray.value.push();
    // expect(imgService.getImages()).toBeTruthy();//toBe(Observable<Item[]>);
    expect(imgService.value instanceof Item[]).toBeTruthy();
    expect(imgService.value.length).toBe(2);
  });
});
