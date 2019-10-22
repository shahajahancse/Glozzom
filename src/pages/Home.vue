<template>
	<div class="">

		<!-- Carousel Slider -->

	    <section id="showcase" class="bg-dark">
		    <div id="myCarousel" class="carousel slide" data-ride="carousel">
		      <ol class="carousel-indicators">
		        <li data-slide-to="0" data-target="#myCarousel" class="active"></li>
		        <li data-slide-to="1" data-target="#myCarousel" class="active"></li>
		        <li data-slide-to="2" data-target="#myCarousel" class="active"></li>
		      </ol>
		      <div class="carousel-inner">
		        <div class="carousel-item carousel-items carousel-img-1 active">
		          <div class="container">
		            <div class="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5">
		              <h2 class="display-4">Heading One</h2>
		              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum vel dolores qui a, tempora facere quae, quis hic! Ad?</p>
		              <a href="#" class="btn btn-danger">Learn More</a>
		            </div>
		          </div>
		        </div>
		        <div class="carousel-item carousel-items carousel-img-2">
		          <div class="container">
		            <div class="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5 text-right">
		              <h2 class="display-4">Heading Two</h2>
		              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum vel dolores qui a, tempora facere quae, quis hic! Ad?</p>
		              <a href="#" class="btn btn-warning">Learn More</a>
		            </div>
		          </div>
		        </div>
		        <div class="carousel-item carousel-items carousel-img-3">
		          <div class="container">
		            <div class="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5 text-left">
		              <h2 class="display-4">Heading Three</h2>
		              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum vel dolores qui a, tempora facere quae, quis hic! Ad?</p>
		              <a href="#" class="btn btn-primary">Learn More</a>
		            </div>
		          </div>
		        </div>
		      </div>
		      <a href="#myCarousel" class="carousel-control-prev" data-slide="prev">
		        <!-- <spam class="carousel-control-prev-icon"></spam> -->
		        <span><i class="fa fa-angle-left" aria-hidden="true" style="font-size: 30px"></i></span>
		      </a>
		      <a href="#myCarousel" class="carousel-control-next" data-slide="next">
		        <!-- <spam class="carousel-control-next-icon"></spam> -->
		        <span><i class="fa fa-angle-right" aria-hidden="true" style="font-size: 30px"></i></span>
		      </a>
		    </div>
	    </section>
	 
	    <!--  Home Icon -->

	    <section id="homeicon" class="py-5 text-center">
		    <div class="container">
		      <div class="row">
		        <div class="col-lg-4 my-2">
		          <i class="fa fa-gears"></i>
		          <h3 class="my-2">Turning Gears</h3>
		          <div class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</div>
		        </div>
		        <div class="col-lg-4 my-2">
		          <i class="fa fa-cloud"></i>
		          <h3 class="my-2">Sending Data</h3>
		          <div class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</div>
		        </div>
		        <div class="col-lg-4 my-2">
		          <i class="fa fa-cart-plus"></i>
		          <h3 class="my-2">Making Money</h3>
		          <div class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</div>
		        </div>
		      </div>
		    </div>
	    </section>

	    <!-- Home - Get Started -->
	    <section id="getstarted" class="py-5 text-center text-light">
		    <div class="dark-overlay">
		      <div class="container">
		        <div class="row">
		          <div class="col mt-5 pt-4">
		            <h3>Are You Ready To Get Started?</h3>
		            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat voluptatem laboriosam vero recusandae repellendus? Impedit iure est sit voluptatum blanditiis cum sequi laudantium quod dicta, a quaerat vel, obcaecati!</p>
		          </div>
		        </div>
		      </div>
		    </div>
	    </section>

	    <!-- Home Info Section -->

	    <section id="homeinfo" class="py-5">
		    <div class="container">
		      <div class="row">
		        <div class="col-md-6 align-self-center">
		          <h3 class="">Lorem Ipsum Dolor Sit</h3>
		          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos recusandae nobis reiciendis voluptatem quae iusto, fugiat itaque iste explicabo.</p>
		          <a href="#" class="btn btn-outline-dark">Read More</a>
		        </div>
		        <div class="col-md-6 mt-3 mt-md-0">
		          <img src="dist/img/pc.jpeg" class="img-fluid rounded" alt="pc.jpeg">
		        </div>
		      </div>
		    </div>
	    </section>

	  	<!--  Home Video Section -->

	    <section id="home-video" class="text-center text-light">
		    <div class="dark-overlay">
		      <div class="container">
		        <div class="row">
		          <div class="col mt-5 pt-4">
		            <div uk-lightbox class="">
		              <a href="https://youtu.be/mXDIGUsqVZY" class="">
		                <i class="fa fa-play"></i>
		              </a>
		            </div>
		            <h2 class="mt-3">Bootstrap 4 Crash Course</h2>
		          </div>
		        </div>
		      </div>
		    </div>
	    </section>


        <!-- Photo  gallery  -->


	    <section id="gallery" class="py-5" uk-lightbox>
		    <div class="container">
		      <div class="row text-center mb-3">
		        <div class="col">
		          <h2>Photo Gallery</h2>
		          <p class="lead">Check out our photos</p>
		        </div>
		      </div>
		      <div class="row">
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image1.jpeg" class="">
		              <img src="dist/img/image1.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image2.jpeg" class="">
		              <img src="dist/img/image2.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image3.jpeg" class="">
		              <img src="dist/img/image3.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		      </div>
		      <div class="row pt-0 pt-md-4">
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image4.jpeg" class="">
		              <img src="dist/img/image4.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image5.jpeg" class="">
		              <img src="dist/img/image5.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="">
		            <a href="dist/img/image6.jpeg" class="">
		              <img src="dist/img/image6.jpeg" alt="" class="img-fluid">
		            </a>
		          </div>
		        </div>
		      </div>
		    </div>
	    </section>

  		<!--  News Letter  -->

	    <section id="newsletter" class="py-5 bg-dark text-light text-center">
		    <div class="container">
		      <div class="row">
		        <div class="col">
		          <h2>Signup For Our Newsletter</h2>
		          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus.</p>
		          <form action="#" method="POST" class="form-inline justify-content-center">
		            <label for="name" class="sr-only">Name</label>
		            <input type="text" placeholder="Enter name" class="form-control m-2">
		            <label for="email" class="sr-only">Email</label>
		            <input type="email" placeholder="Enter email" class="form-control m-2">
		            <input type="submit" value="Subscribe" class="btn btn-primary m-2 ">
		          </form>
		        </div>
		      </div>
		    </div>
	    </section>

	</div>
</template>