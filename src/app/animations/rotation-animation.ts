import {animate, state, style, transition, trigger} from "@angular/animations";

export const rotationAnimation = trigger('cardFlip', [
  state('default', style({
    transform: 'none'
  })),
  state('flipped', style({
    transform: 'rotateY(180deg)'
  })),
  transition('default <=> flipped', [
    animate('400ms')
  ])
])
