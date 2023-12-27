// ----------------------------------- TS -------------------------
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// const enterTransition = transition(':enter', [
//     query('.navbar-btn', [
//     style({ transform: 'translateY(160%)' }),
//     stagger(100, [
//       animate('0.5s ease-in', style({ transform: 'translateY(0)' }))
//     ])
//   ])
// ]);

// const transitionInX = transition(':enter',[
//   style({
//     transform: 'translateX(150%)',
//   }),
//   animate('2.5s ease-in', 
//     style({
//       transform: 'translateX(0)',
//     }))
// ]);

// const enterTransition = transition(':enter',[
//   style({
//     transform: 'translateY(100%)'
//   }),
//   animate('1s ease-in',
//     style({
//       transform: 'translateY(0)'
//     })
//   )
// ])

// const translateY = trigger('translateY', [enterTransition])
// const translateX = trigger('translateX', [transitionInX])

// const moveInY = trigger('moveIn', [enterTransition])

@Component({
  selector: 'app-itbf-img',
  templateUrl: './itbf-img.component.html',
  styleUrls: ['./itbf-img.component.css'],
  // animations: [translateY,translateX]
})
export class ItbfImgComponent {
  images: string[] = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Agrega tus rutas de imágenes
  currentIndex = 0;
  
  ngOnInit(){
    
  }
}
