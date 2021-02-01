<template>
  <div class="col-lg-3 col-md-4 col-custom">
    <div class="myaccount-tab-menu nav" role="tablist">
      <a href="#dashboad" class="active" data-toggle="tab"
        ><i class="fa fa-tachometer-alt"></i> Tableau De Bord</a
      >
      <a href="#orders" data-toggle="tab"
        ><i class="fa fa-cart-arrow-down"></i> Commandes</a
      >
      <a href="#payment-method" data-toggle="tab"
        ><i class="fa fa-tags"></i> Gestion Des Produits</a
      >
      <a href="#address-edit" data-toggle="tab"
        ><i class="fa fa-globe"></i> Site</a
      >
      <a href="#account-info" data-toggle="tab"
        ><i class="fa fa-user"></i> Compte</a
      >
      <a href="login.html"><i class="fa fa-sign-out-alt"></i> Déconnexion</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
</style>