
import {Component, OnInit} from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})



export class ItemDetailComponent implements OnInit {
  closeResult: string;
  visibleImages: any[] = [];

  constructor(private modalService: NgbModal, private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }


  ngOnInit() { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /*private getDismissReason(reason:any): string {
    /*if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
}*/
}
