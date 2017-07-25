import { keyframes } from 'styled-components'
import { theme } from './theme'

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const FadeSlideFromBottom = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, ${props => props.theme.units.gutter * 4}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
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

const FadeSlideFromTop = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -${props => props.theme.units.gutter}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlideFromTopSM = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -${props => props.theme.units.gutter}px, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const StaggerMenu = keyframes`
from {
  transform: translate3d(0, 5px, 0) skew(14deg, 7deg);
  opacity: 0
}

to {
  transform: translate3d(0, 0, 0) skew(0, 0);
  opacity: 1
}
`
