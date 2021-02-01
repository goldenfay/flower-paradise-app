<template>
  <div>
    <!--===== Pre-Loading area Start =====-->
    <!-- <div id="preloader">
      <div class="preloader">
        <div class="spinner-block">
          <h1 class="spinner spinner-3 mb-0">.</h1>
        </div>
      </div>
    </div> -->
    <!--==== Pre-Loading Area End ====-->
    <!-- Header Area Start Here -->
    <Header />
    <!-- Header Area End Here -->

    <div class="intro11-slider-wrap section-2">
      <HomeSwiper />
    </div>
    <div class="shop-collection-area gray-bg pt-no-text pb-no-text">
      <div class="container custom-area">
        <div class="row mb-30">
          <div class="col-md-6 col-custom">
            <div class="collection-content">
              <div class="section-title text-left">
                <span class="section-title-1">Des bouquets pour</span>
                <h3 class="section-title-3 pb-0">Anniversaires et Cadeaux</h3>
              </div>
              <div class="desc-content">
                <p>
                  Pour toute planification de vos événements 🌸❤️( anniversaire,
                  mariages ,fiançailles), des packs de décoration spacials et
                  personnalisés.
                </p>
              </div>
              <a
                href="shop.html"
                class="btn flosun-button secondary-btn rounded-0"
                >Acheter maintenant</a
              >
            </div>
          </div>
          <div class="col-md-6 col-custom">
            <!--Single Banner Area Start-->
            <div class="single-banner hover-style">
              <div class="banner-img">
                <a href="#">
                  <img src="../../assets/images/main/birthdays.jpg" alt="" />
                  <div class="overlay-1"></div>
                </a>
              </div>
            </div>
            <!--Single Banner Area End-->
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-custom order-2 order-md-1">
            <!--Single Banner Area Start-->
            <div class="single-banner hover-style">
              <div class="banner-img">
                <a href="#">
                  <img src="../../assets/images/main/weddings.jpg" alt="" />
                  <div class="overlay-1"></div>
                </a>
              </div>
            </div>
            <!--Single Banner Area End-->
          </div>
          <div class="col-md-6 col-custom order-1 order-md-2">
            <div class="collection-content">
              <div class="section-title text-left">
                <span class="section-title-1">Des bouquets pour</span>
                <h3 class="section-title-3 pb-0">Marriage</h3>
              </div>
              <div class="desc-content">
                <p>
                  Pour toutes nos belle mariées, des bouquets splendides qui
                  épanouiront vos robes blanches et reflètent votre éclat.
                </p>
              </div>
              <a
                href="shop.html"
                class="btn flosun-button secondary-btn rounded-0"
                >Acheter maintenant</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    HomeSwiper,
  },
};
</script>

<style>
</style>
