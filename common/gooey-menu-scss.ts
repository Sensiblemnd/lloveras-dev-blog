export const gooeyMenuScss = `
@use "sass:math";

@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

$menu-items: 5;

$background-color: #fff;
$indicator-color: #fff;

$transition-speed: 0.5s;

$height: math.div(100, $menu-items) * 1%;
$menu-items-loop-offset: $menu-items - 1;

$icon-default-color: #121212;
$icon-hover-color: #ffb440;

$nav-background-color: #924382;

$nav-indicator-border-color: #924382;

// ======================================================
// The usual Global resets
// ======================================================

*,
*::before,
*::after {
  box-sizing: border-box; // learn more: https://css-tricks.com/box-sizing/
}

// Presentation Styling

.gooey {
  background-color: $nav-background-color;
  height: 100%;
  max-width: 70px;
  overflow: hidden;
}

.primary-nav {
  list-style: none;
  max-width: 70px;
  padding: 0;
  height: auto;
  margin: 0;
}

.menu-item {
  display: block;
  margin: 0;
  padding: 0;
  height: $height;
  text-align: center;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  a {
    color: #fff;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: none;
    font-size: 30px;

    &:hover {
      color: $icon-hover-color;
    }
  }

  &.is-active a {
    color: $icon-hover-color;
  }
}

.menu-indicator {
  position: relative;
  z-index: 0;

  .menu-item {
    // ======================================================
    // Step 2.1 - Making the indicator with the pseudo element.
    // ======================================================
    &:last-child {
      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        pointer-events: none;
        transition: top #{$transition-speed} cubic-bezier(0.65, 0.05, 0.36, 1);
      }
      // Making the top CSS Triangle - learn more: https://css-tricks.com/animation-css-triangles-work/
      &::before {
        top: math.div($height, 2);
        margin-left: -3px;
        background-color: $nav-indicator-border-color;
        right: 0;
        width: 23px;
        height: 23px;
        border-top-left-radius: 50%;
        // border: 7px solid $background-color;
        border-bottom-left-radius: 50%;
        margin-top: -12px;
      }

      &::after {
        top: math.div($height, 2);
        margin-left: -3px;
        background-color: #924382;
        right: -7px;
        width: 23px;
        height: 23px;
        border-top-left-radius: 50%;
        border: 7px solid #fff;
        border-bottom-left-radius: 50%;
        margin-top: -12px;
      }
    }
  }

  @for $i from 1 through $menu-items-loop-offset {
    .menu-item:nth-child(#{$i}).is-active ~ .menu-item:last-child:after,
    .menu-item:nth-child(#{$i}).is-active ~ .menu-item:last-child:before {
      top: ($height * $i) + math.div($height, 2)-$height;
    }
  }

  @for $i from 1 through $menu-items-loop-offset {
    .menu-item:nth-child(#{$i}):hover ~ .menu-item:last-child:after,
    .menu-item:nth-child(#{$i}):hover ~ .menu-item:last-child:before {
      top: ($height * $i) + math.div($height, 2)-$height !important;
    }
  }

  .menu-item {
    &:last-child {
      &:hover,
      &.is-active {
        &::before,
        &::after {
          top: (100% - $height) + math.div($height, 2) !important;
        }
      }
    }
  }
}


`
