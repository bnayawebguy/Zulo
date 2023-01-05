import "./src/scss/style.scss"
import { tns } from "./node_modules/tiny-slider/src/tiny-slider"
import "slick-carousel"
import $ from "jquery"

import mixitup from "mixitup"

feather.replace()

$(".menu-toggle").on("click", function () {
  $(this).toggleClass("active")
  $(this).prev("ul").slideToggle()
})

$(".team-slider").slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
})

$(".project-slider").slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})

var containerEl = document.querySelector(".container")
var mixer = mixitup(containerEl)
