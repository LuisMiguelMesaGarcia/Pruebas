import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

// interface SideNavToggle{
//   screenWidth: number;
//   collapsed: boolean;
// }
// const enterTransition = transition(':enter',[
//   style({
//     opacity: 0,
//     transform: 'translateX(100%)',
//   }),
//   animate('1s ease-in', 
//     style({
//       transform: 'translateX(0)',
//       opacity:1
//     }))
// ]);

// const exitTransition = transition(':leave',[
//   style({
//     opacity: 1,
//     transform: 'translateX(0)',
//   }),
//   animate('1s ease-out',
//     style({
//       transform: 'translateX(100%)',
//       opacity: 0,
//     }))
// ]);

// const fadeOut = trigger('fadeOut', [exitTransition])
// const fadeIn = trigger('fadeIn', [enterTransition])


// const fadeInOut = trigger('fadeInOut',[
//   state(
//     'open',
//     style({
//       opacity:1,
//     })
//   ),
//   state(
//     'close',
//     style({
//       opacity: 0,
//     })
//   ),
//   transition('close => open', [animate('1s ease-in')]),
//   transition('open => close', [animate('1s ease-out')]),
// ]);

// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'in',
//     style({
//       opacity:1,
//     })
//   ),
//   transition('void => *', [style({opacity:0}), animate('1s ease-out')]),
//   transition('* => void', [animate('1s ease-out'), style({opacity:0})])
// ])


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations:[fadeInOut]
  // animations: [fadeIn, fadeOut]
})
export class AppComponent {
 isShown = false;
 fadeInOut():void{
    this.isShown = !this.isShown;
 }

 onAnimationStart(event:any){
  console.log('onAnimationStart', event)
 }
 onAnimationDone(event:any){
  console.log('onAnimationDone', event)
 }

}



 // title = 'pruebas';

  // isSideNavCollapsed = false;
  // screenWidth = 0;

  // onToggleSideNav(data: SideNavToggle):void{
  //   this.screenWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }