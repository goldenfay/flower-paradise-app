<template>
  <div>
    <HeadCover />
    <div class="my-5">
      <div class="my-account-wrapper mt-no-text">
        <div class="container container-default-2 custom-area">
          <div class="row">
            <div class="col-lg-12 col-custom">
              <!-- My Account Page Start -->
              <div class="myaccount-page-wrapper">
                <!-- My Account Tab Menu Start -->
                <div class="row">
                  <SideBar />

                  <div class="col-lg-9 col-md-8 col-custom">
                    <router-view></router-view>
                  </div>
                </div>
              </div>
              <!-- My Account Page End -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import HeadCover from "./components/HeadCover";
import Footer from "@/components/Footer";
export default {
  name: "DashboardLayout",
  components: {
    SideBar,
    HeadCover,
    Footer,
  },
};
</script>

<style>
</style>
