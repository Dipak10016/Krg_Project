import React from "react";
import './Sidebarmobile.css'
import { Link } from "react-router-dom";


function Sidebarmobile(){

    return(
        <>
             	<input class="dark-light" type="checkbox" id="dark-light" name="dark-light"/>


	{/* <a href="https://front.codes/" class="logo" target="_blank">
		<img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
	</a> */}

  	<div class="sec-center"> 	
	  	<input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label class="for-dropdown" for="dropdown">Menu <i class="uil uil-arrow-down"></i></label>
  		<div class="section-dropdown"> 
  			<Link to='/profile'>Profile<i class="uil uil-arrow-right"></i></Link>
  			<a href="#">Resume<i class="uil uil-arrow-right"></i></a>
  			<a href="#">Personality test<i class="uil uil-arrow-right"></i></a>
		  	<input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label class="for-dropdown-sub" for="dropdown-sub">My Applications <i class="uil uil-plus"></i></label>
	  		<div class="section-dropdown-sub"> 
	  			<a href="#">Active Applications<i class="uil uil-arrow-right"></i></a>
	  			<a href="#">History<i class="uil uil-arrow-right"></i></a>
	  		</div>
            
  			<a href="#">My subcriptions<i class="uil uil-arrow-right"></i></a>
  			<a href="#">Settings<i class="uil uil-arrow-right"></i></a>
  		</div>
  	</div>
        </>
    )
}

export default Sidebarmobile