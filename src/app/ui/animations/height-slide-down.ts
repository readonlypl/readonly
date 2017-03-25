import { trigger, transition, style, animate, AnimationEntryMetadata } from '@angular/core';

export const heightSlideDownAnimation: AnimationEntryMetadata = trigger(
  'heightSlideDown', [
    transition(':enter', [
      style({height: '0', opacity: 0}),
      animate('500ms', style({height: '*', opacity: 1}))
    ]),
    transition(':leave', [
      style({height: '*', opacity: 1}),
      animate('500ms', style({height: '0', opacity: 0}))
    ])
  ]
)
