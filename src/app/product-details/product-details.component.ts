import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  imageList = ['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg']; // reemplaza con tus rutas de imágenes
  selectedImage = this.imageList[0]; // La imagen por defecto

  selectImage(image: string) {
    this.selectedImage = image;
  }

}

