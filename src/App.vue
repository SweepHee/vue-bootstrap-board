<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script type="text/babel">
import Header from "@/components/Header"

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>

</style>
