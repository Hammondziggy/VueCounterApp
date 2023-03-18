<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">404 Not Found</h1>
    <p class="mb-8">The page you are looking for does not exist.</p>
    <button class="px-4 py-2 rounded-md bg-blue-500 text-white font-bold" @click="redirectToHome">Go back to homepage</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push('/');
    }
  }
}
</script>