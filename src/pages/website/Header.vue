<template>
  <header class="main-header-area">
    <!-- Main Header Area Start -->
    <div class="main-header header-transparent header-sticky">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-2 col-xl-2 col-md-6 col-6 col-custom">
            <div class="header-logo d-flex align-items-center">
              <a href="index.html">
                <img
                  class="img-full"
                  src="../../assets/images/logos/logo.png"
                  alt="Header Logo"
                />
              </a>
            </div>
          </div>
          <div
            class="col-lg-8 d-none d-lg-flex justify-content-center col-custom"
          >
            <nav class="main-nav d-none d-lg-flex">
              <ul class="nav">
                <li>
                  <a class="active" href="index.html">
                    <span class="menu-text"> Acceuil</span>
                    <!-- <i class="fa fa-angle-down"></i> -->
                  </a>
                </li>
                <li>
                  <a href="shop.html">
                    <span class="menu-text">Shopping</span>
                    <!-- <i class="fa fa-angle-down"></i> -->
                  </a>
                </li>

                <li>
                  <a href="about-us.html">
                    <span class="menu-text"> A propos de nous</span>
                  </a>
                </li>
                <li>
                  <a href="contact-us.html">
                    <span class="menu-text">Nous Contacter</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-2 col-md-6 col-6 col-custom">
            <div class="header-right-area main-nav">
              <ul class="nav">
                <!-- <li class="minicart-wrap">
                                    <a href="#" class="minicart-btn toolbar-btn">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span class="cart-item_count">3</span>
                                    </a>
                                    <div class="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                                        <div class="single-cart-item">
                                            <div class="cart-img">
                                                <a href="cart.html"><img src="assets/images/cart/1.jpg" alt=""></a>
                                            </div>
                                            <div class="cart-text">
                                                <h5 class="title"><a href="cart.html">Odio tortor consequat</a></h5>
                                                <div class="cart-text-btn">
                                                    <div class="cart-qty">
                                                        <span>1×</span>
                                                        <span class="cart-price">DZD198.00</span>
                                                    </div>
                                                    <button type="button"><i class="ion-trash-b"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-cart-item">
                                            <div class="cart-img">
                                                <a href="cart.html"><img src="assets/images/cart/2.jpg" alt=""></a>
                                            </div>
                                            <div class="cart-text">
                                                <h5 class="title"><a href="cart.html">Integer eget augue</a></h5>
                                                <div class="cart-text-btn">
                                                    <div class="cart-qty">
                                                        <span>1×</span>
                                                        <span class="cart-price">DZD198.00</span>
                                                    </div>
                                                    <button type="button"><i class="ion-trash-b"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-cart-item">
                                            <div class="cart-img">
                                                <a href="cart.html"><img src="assets/images/cart/3.jpg" alt=""></a>
                                            </div>
                                            <div class="cart-text">
                                                <h5 class="title"><a href="cart.html">Eleifend quam</a></h5>
                                                <div class="cart-text-btn">
                                                    <div class="cart-qty">
                                                        <span>1×</span>
                                                        <span class="cart-price">DZD198.00</span>
                                                    </div>
                                                    <button type="button"><i class="ion-trash-b"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-price-total d-flex justify-content-between">
                                            <h5>Total :</h5>
                                            <h5>DZD1166.00</h5>
                                        </div>
                                        <div class="cart-links d-flex justify-content-between">
                                            <a class="btn product-cart button-icon flosun-button dark-btn" href="cart.html">View cart</a>
                                            <a class="btn flosun-button secondary-btn rounded-0" href="checkout.html">Checkout</a>
                                        </div>
                                    </div>
                                </li> -->
                <li class="sidemenu-wrap">
                  <a href="#"><i class="fa fa-search"></i> </a>
                  <ul
                    class="dropdown-sidemenu dropdown-hover-2 dropdown-search"
                  >
                    <li>
                      <form action="#">
                        <input
                          name="search"
                          id="search"
                          placeholder="Search"
                          type="text"
                        />
                        <button type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
                <!-- <li class="account-menu-wrap d-none d-lg-flex">
                                    <a href="#" class="off-canvas-menu-btn">
                                        <i class="fa fa-bars"></i>
                                    </a>
                                </li> -->
                <li class="mobile-menu-btn d-lg-none">
                  <a class="off-canvas-btn" href="#">
                    <i class="fa fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Header Area End -->
    <MobileSideBar />
  </header>
</template>

<script>
import MobileSideBar from "./SideBar";
export default {
  name: "Header",
  components: {
    MobileSideBar,
  },
};
</script>

<style>
</style>
