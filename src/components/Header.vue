<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Welcome</h1>
        <p class="lead text-muted">Share links and earn 10% of the product price! </p>
        <p>
          <router-link to="/login" class="btn btn-primary my-2">Login</router-link>
          <router-link to="/register" class="btn btn-secondary my-2">Register</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header'
}
</script>

