import { keyframes } from 'styled-components'
import { theme } from './theme'

//Fade in
const fadeInKeyFrame = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const fadeIn = css`
opacity: 0;
animation: ${fadeInKeyFrame} $timing-animation forwards $easing;
`

const fadeOutKeyFrames = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

//Fade Out
const fadeOut = css`
opacity: 1;
animation: ${fadeOutKeyFrame} $timing-animation forwards $easing;
`

const FadeSlideFromBottomKeyFrame = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, ${props => props.theme.units.gutter * 4}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`
//Fade Slide From Bottonm
const FadeSlideFromBottom = css`
opacity: 0;
animation: ${FadeSlideFromBottomKeyFrame} $timing-animation forwards $easing;
`

const FadeSlideFromBottomSM = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, ${props => props.theme.units.gutter}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

//Fade Slide From Top
const FadeSlideFromTopKeyFrame = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -${props => props.theme.units.gutter}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlikeFromTop = css`
opacity: 0;
animation: ${FadeSlideFromTopKeyFrame} $timing-animation forwards $easing;
`

//Fade Slide From Top SM
const FadeSlideFromTopSMKeyFrame = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -${props => props.theme.units.gutter}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlideFromTopSM = css`
opacity: 0;
animation: ${FadeSlideFromTopSMKeyFrame} $timing-animation forwards $easing;
`

//Stagger Menu
const StaggerMenuKeyFrame = keyframes`
from {
  transform: translate3d(0, 5px, 0) skew(14deg, 7deg);
  opacity: 0
}

to {
  transform: translate3d(0, 0, 0) skew(0, 0);
  opacity: 1
}
`

const StaggerMenu = css`
opacity: 0;
animation: ${StaggerMenuKeyFrame} $timing-animation forwards $easing;
`
