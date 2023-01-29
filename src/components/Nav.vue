<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
    <router-link to="/" class="navbar-brand my-0 mr-md-auto font-weight-normal">Influencer</router-link>

    <nav class="my-2 my-md-0 mr-md-3" v-if="user">
      <a href="javascript:void(0)" class="p-2 text-dark" @click="logout">Logout</a>
    </nav>
    <router-link to="/login" class="btn btn-outline-primary" v-if="!user">Login</router-link>
    <router-link to="/profile" class="btn btn-outline-primary" v-if="user">{{ user?.first_name }}
      {{ user?.last_name }}
    </router-link>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nav',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    async logout () {
      await axios.post('logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })

      await this.$router.push('/login')
    }
  }
}
</script>


