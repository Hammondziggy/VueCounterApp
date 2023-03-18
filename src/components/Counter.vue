<template>
  <div class="counter flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">{{ count }}</h1>
    <div class="flex justify-center items-center w-full">
      <button class="px-6 py-3 rounded-full bg-white hover:bg-gray-100 mr-4" @click="decrement">Decrement</button>
      <button class="px-6 py-3 rounded-full bg-white hover:bg-gray-100" @click="increment">Increment</button>
    </div>
    <div class="flex justify-center items-center w-full mt-4">
      <input type="number" v-model="value" ref="inputField" class="flex-1 rounded-md bg-white p-2 text-center font-bold">
      <button class="px-6 py-3 rounded-full bg-white hover:bg-gray-100 ml-2" @click="handleSetValue">Set Value</button>
    </div>
    <button class="px-6 py-3 rounded-full bg-white hover:bg-gray-100 mt-4" @click="reset">Reset</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCounter } from '../composables/useCounter'

export default {
  name: 'Counter',
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter()

    let value = ref(null);

    const inputField = ref(null);

    const handleSetValue = () => {
      setValue(Number(value.value))
      value.value = null // reset input field value to null
    }

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      handleSetValue,
      watch: {
        value(newValue) {
          value.value = newValue
        },
      },
    }
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
