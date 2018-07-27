// src/mixins.js
var globalMixins = {
  /* noSelect is a static mixin  */
  noSelect: {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  },
  /* Germania One font defaults */
  GermaniaOne: function (obj, value) {
    return {
      'font-family': 'Germania One, sans-serif',
      'font-style': 'normal',
      'font-size': value,
      'font-weight': 400,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    }
  },
  SourceSans: function(obj, value) {
    return {
      'font-family': 'Source Sans Pro, sans-serif',
      'font-style': 'normal',
      'font-size': value,
      'font-weight': 400,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    }
  },
  // Component transition
  controlTransition: {
    'transition': 'all .2s ease'
  },
  // Solid button color variation
  buttonVariant: function (obj, color, paddingHeight, paddingWidth) {
    return {
      'background': color,
      'border': `0.05rem solid color(${color} shade(3%))`,
      'color': 'var(--font-color-light)',
      'padding': `${paddingHeight} ${paddingWidth} ${paddingHeight} ${paddingWidth}`,
      '&:focus' : {
        'box-shadow': `0 0 0 .1rem rgba(${color}, .2)`,
      },
      '&:focus, &:hover' : {
        'background': `color(${color} shade(7%))`,
        'border-color': `color(${color} shade(10%))`,
        'color': 'var(--font-color-dark)',
      },
      '&:active, &:global(.active)' : {
        'background': `color(${color} shade(12%))`,
        'border-color': `color(${color} shade(15%))`,
        'color': 'var(--font-color-dark)',
      },
      '&:global(.loading)' : {
        '&::after' : {
          'border-bottom-color': 'var(--font-color-light)',
          'border-left-color': 'var(--font-color-light)',
          }
        }
      }
  },

  // Outline button color variation
  buttonOutlineVariant: function (obj, color, paddingHeight, paddingWidth) {
    return {
      'background': 'var(--font-color-light)',
      'border': `0.05rem solid ${color}`,
      'color': color,
      'padding': `${paddingHeight} ${paddingWidth} ${paddingHeight} ${paddingWidth}`,
      '&:focus' : {
        'box-shadow': `0 0 0 .1rem rgba(${color}, .2)`,
      },
      '&:focus, &:hover' : {
        'background': `color(${color} tint(50%))`,
        'border-color': `color(${color} shade(2%))`,
        'color': $fontColorLight,
      },
      '&:active, &:global(.active)' : {
        'background': color,
        'border-color': `color(${color} shade(5%))`,
        'color': 'var(--font-color-light)',
      },
      '&:global(.loading)' : {
        '&::after' : {
          'border-bottom-color': color,
          'border-left-color': color
        }
      }
    }
  },
  // Shadow mixin
  shadowVariant: {
    'box-shadow': '0 0.1rem (0.1rem + .05rem) * 2 rgba(var(--button-border-hover), .3)'
  },
  cardBackground: {
    'background': 'white',
    'border': '0.05rem solid color($bgColorLight blackness(25%))',
    'border-radius': '0.1rem'
  }


}
module.exports = globalMixins
