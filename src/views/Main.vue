<template>
  <div>
    <!-- Importing the PageHeader component and passing a title prop to it -->
    <PageHeader title="VueCounterApp" />

    <!-- Main section of the page, displays a message and a button to open the counter modal -->
    <main class="flex-grow flex items-center justify-center">
      <div class="text-center flex flex-col items-center justify-center">
        <p class="text-2xl font-bold mb-4">{{ message }}</p>
        <button class="bg-blue-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-600" @click="openCounterModal">{{ buttonText }}</button>
      </div>
    </main>

    <!-- Modal that displays the CounterPage component -->
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" :class="{ 'hidden': !showCounterModal }">
      <div class="bg-white bg-opacity-80 rounded-md shadow-lg p-4 max-w-md">
        <div class="flex items-center justify-between mb-4">
      .   <h2 class="text-xl font-bold text-center mx-auto">Vue Counter App</h2>
          <button @click="closeCounterModal" class="text-2xl font-bold text-red-500 text-lg">&times;</button>
        </div>
        <CounterPage></CounterPage>
      </div>
    </div> 
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
import CounterPage from './CounterPage.vue';

export default {
  // Registering PageHeader and CounterPage components with this component
  components: {
    PageHeader,
    CounterPage
  },
  data() {
    // Data properties for the component, which includes the message displayed on the main section of the page, 
    // the text on the button to open the counter modal, and a boolean to determine whether to show the modal or not
    return {
      message: 'Welcome! Now you can get a feel of my counter app. Click the button and Have fun! 😊',
      buttonText: 'Counter App',
      showCounterModal: false
    };
  },
  methods: {
    // Method to open the counter modal by setting showCounterModal to true
    openCounterModal() {
      this.showCounterModal = true;
    },

    // Method to close the counter modal by setting showCounterModal to false
    closeCounterModal() {
      this.showCounterModal = false;
    },
  },
};
</script>

