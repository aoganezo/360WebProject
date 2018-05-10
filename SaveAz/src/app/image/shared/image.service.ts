import { Injectable } from '@angular/core';


@Injectable()
export class ImageService{
    visibleImages = []

    getImages(){
        return this.visibleImages = ImagesArray.slice(0);
    }

    getImageFile(id: number){
        return ImagesArray.slice(0).find(image => image.id==id)
    }
}

const ImagesArray = [
    {"id": 1, "category": "testCategory", "caption": "This is a test caption 1", "url": "assets/img/product.png"},
    {"id": 2, "category": "testCategory", "caption": "This is a test caption 2", "url": "assets/img/product.png"},
    {"id": 3, "category": "testCategory", "caption": "This is a test caption 3", "url": "assets/img/product.png"},
    {"id": 4, "category": "testCategory", "caption": "This is a test caption 4", "url": "assets/img/product.png"},
    {"id": 5, "category": "testCategory", "caption": "This is a test caption 5", "url": "assets/img/product.png"},
    {"id": 6, "category": "testCategory", "caption": "This is a test caption 6", "url": "assets/img/product.png"},
    {"id": 7, "category": "testCategory", "caption": "This is a test caption 7", "url": "assets/img/product.png"},
    {"id": 8, "category": "testCategory", "caption": "This is a test caption 8", "url": "assets/img/product.png"},
    {"id": 9, "category": "testCategory", "caption": "This is a test caption 9 and i want to see what this does buta apeo iawpdlf kq;wealifj", "url": "assets/img/product.png"},
    {"id": 10, "category": "testCategory", "caption": "This is a test caption 10", "url": "assets/img/product.png"},
    {"id": 11, "category": "testCategory", "caption": "This is a test caption 11", "url": "assets/img/product.png"},
    {"id": 12, "category": "testCategory", "caption": "This is a test caption 12", "url": "assets/img/product.png"},
    {"id": 13, "category": "testCategory", "caption": "This is a test caption 13", "url": "assets/img/product.png"},
    {"id": 14, "category": "testCategory", "caption": "This is a test caption 14", "url": "assets/img/product.png"},
    {"id": 15, "category": "testCategory", "caption": "This is a test caption 15", "url": "assets/img/product.png"},
    {"id": 16, "category": "testCategory", "caption": "This is a test caption 16", "url": "assets/img/product.png"}

]