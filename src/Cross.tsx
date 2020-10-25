import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Cross = ((props) => (
  <Burger {...props} _lines={2} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      data-testid="cross"
      onClick={o.handler}
      onKeyUp={(e) => e.key === 'Enter' && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex={0}
    >
      <div data-testid="bar-one" style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div data-testid="bar-two" style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
