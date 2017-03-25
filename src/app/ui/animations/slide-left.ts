import { trigger, transition, style, animate, AnimationEntryMetadata } from '@angular/core';

export const slideLeftAnimation: AnimationEntryMetadata = trigger(
  'slideLeft', [
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0)', opacity: 1}),
      animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
    ])
  ]
)
