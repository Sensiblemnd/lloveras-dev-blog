export const gooeyMenuScss = `
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

$menu-items: 5;

$background-color: #fff;
$indicator-color: #fff;
 
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
      top: ($height * $i) + ($height/2)-$height;
    }
  }

  @for $i from 1 through $menu-items-loop-offset {
    .menu-item:nth-child(#{$i}):hover ~ .menu-item:last-child:after,
    .menu-item:nth-child(#{$i}):hover ~ .menu-item:last-child:before {
      top: ($height * $i) + ($height/2)-$height !important;
    }
  }

  .menu-item {
    &:last-child {
      &:hover,
      &.is-active {
        &::before,
        &::after {
          top: (100% - $height) + ($height/2) !important;
        }
      }
    }
  }
}

`
