import { TestBed, async } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    expect(GalleryComponent).toBeDefined();
  }));
});
