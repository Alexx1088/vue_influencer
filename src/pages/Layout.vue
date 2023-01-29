<template>
  <Nav :user="user"/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue'
import axios from 'axios'

export default {
  name: 'Layout',
  components: {
    Nav
  },
  data () {
    return {
      user: null
    }
  },
  async mounted () {
    const { data } = await axios.get('user',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })

    this.user = data.data

    //  this.user = new User(data.data);
    //  this.$store.dispatch('setUser', this.user);
  }
}
</script>

