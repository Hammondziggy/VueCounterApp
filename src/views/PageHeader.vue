<template>
  <header class="bg-blue-500 text-white px-4 py-2 flex items-center">
    <h1 class="text-lg font-bold">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>