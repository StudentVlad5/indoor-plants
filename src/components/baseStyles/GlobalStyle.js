import 'modern-normalize';
import theme from 'components/baseStyles/Variables.styled';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  /* Raisonne Pro */
  font-family: 'Archivo', sans-serif;
  /* font-family: 'Barlow', sans-serif; */
  /* Nib Pro */
  /* font-family: 'Domine', serif; */
 font-family: 'Fraunces', serif;

  background-color:${theme.colors.fon};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}

 //-----pagination-----//
.paginate__container {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 50vw;

  margin: 0 auto;
  padding: 6px 12px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;

  background-color: transparent;


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    padding: 8px 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 500px;
  }
}

.paginate__page, .paginate__page--prev, .paginate__page--next, .paginate__page--break {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 25px;
  height: 25px;

  color:${theme.colors.brown1};

  transition: all .25s ease-in;

  &:hover, &:focus {
    color:${theme.colors.darkGreen};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 35px;
    height: 35px;
  }
}

.paginate__link {
  display: block;
}

.paginate__page--disabled {
  pointer-events: none;
  opacity: 0.5;
}

.paginate__page--active {
  pointer-events: none;
  border: 0.5px solid ${theme.colors.brown1};
  border-radius: 5px;

}

//-----Swiper-----//

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
}

.swiper-button-next::after {

}

.swiper-button-prev::after {

}

.swiper-pagination-bullet-active.swiper-pagination-bullet{

}
.swiper-pagination-bullet {

}
.swiper-button-prev,
.swiper-button-next,
.swiper-pagination-bullet {
  transform: scale(1.1);
}

input[type="date"]::-webkit-calendar-picker-indicator {

  opacity: 1;
}

input::-webkit-calendar-picker-indicator:hover {
  opacity: 0.6;
  transform: scale(1.2);
  cursor: pointer;
}

//-----Range-----//
.rc-slider {
    background-color: ${theme.colors.fon} !important;
    border-radius:0 !important;
}

.rc-slider-track {
    background-color: ${theme.colors.green} !important;
}

.rc-slider-handle{
  background-color: ${theme.colors.fon} !important;
  border: solid 2px ${theme.colors.green} !important;

  &:focus-visible{
    box-shadow: 0 0 0 3px ${theme.colors.green2} !important;
  }

  &-dragging{
    box-shadow: 0 0 0 5px ${theme.colors.green2} !important;
  }
}

.rc-slider-disabled{
  background-color:${theme.colors.fon} !important;}


// NAVLINK
.linkFolder.active {
  color: ${theme.colors.white};
  background-color: ${theme.colors.green};
}

/* HEADER */
.addHeaderBottom{
  background-color: ${theme.colors.brown1};
}
`;
