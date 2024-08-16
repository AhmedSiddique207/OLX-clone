import React from 'react'

//image import
import sone from "./images/s1.webp"
import stwo from "./images/one.jfif"

//style imports
import "./cascading.css"

//link import
import { Link } from 'react-router-dom'


export default function Adslider() {

  return (

  <>
<br/>
<>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <Link to="https://pk.vuse.com/collections/vuse-go-5000?utm_source=OLX&utm_medium=OLX+Vuse+5K+Launch+&utm_campaign=Vuse+5K+Launch+" target='_blank'>
      <div class="carousel-item active ">
        <img src={sone} class=" d-block ps-2 w-70 rounded" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={sone} class=" d-block ps-2 w-70 rounded" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={sone} class=" d-block ps-2 w-70 rounded" alt="..."/>
      </div>
  </Link>
    </div>
  </div>
  </>

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <Link to="https://www.olx.com.pk/myads?utm_source=CLM-OLX&utm_medium=house-ads&utm_campaign=feature-ad" target='_blank'>
    <div class="carousel-item active ">
      <img src={stwo} class=" d-block ps-2 w-70 rounded" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={stwo} class=" d-block ps-2 w-70 rounded" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={stwo} class=" d-block ps-2 w-70 rounded" alt="..."/>
    </div>
</Link>
  </div>
</div>

</>
)
}