<template>
  <div>
    <div class="login-register-area mt-no-text my-5">
        <div class="container custom-area">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
                    <div class="login-register-wrapper">
                        <div class="section-content text-center mb-5">
                            <h2 class="title-4 mb-2">Se connecter</h2>
                            <p class="desc-content">Veuillez introduire vos informations.</p>
                        </div>
                        <form action="#" method="post">
                            <div class="single-input-item mb-3">
                                <input type="email" placeholder="Pseudo">
                            </div>
                            <div class="single-input-item mb-3">
                                <input type="password" placeholder="Mot de passe">
                            </div>
                            <div class="single-input-item mb-3">
                                <div class="login-reg-form-meta d-flex align-items-center justify-content-between">
                                    <div class="remember-meta mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="rememberMe">
                                            <label class="custom-control-label" for="rememberMe">Garder ma session</label>
                                        </div>
                                    </div>
                                    <!-- <a href="#" class="forget-pwd mb-3">Forget Password?</a> -->
                                </div>
                            </div>
                            <div class="single-input-item mb-3">
                                <button class="btn flosun-button secondary-btn theme-color rounded-0">Se Connecter</button>
                            </div>
                            <div class="single-input-item">
                                <a href="register.html">Créer un compte</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <Footer />
  </div>



  
</template>

<script>
import Footer from "@/components/Footer"
export default {
  name: "Login",
  components: {
    Footer
  }
};
</script>

<style>

</style>
