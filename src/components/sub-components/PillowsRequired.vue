
<template>
    <div class="pl-2 pr-2">
      <p class="text-center mt-2 mb-2">
        Each Opening
      </p>
      <b-row>
        <b-col v-for="(pillow,index) in pillows" :key="index">
          <span class="d-flex">
            <b-img class="p-2 mr-2" fluid :src="pillow.imageUrl" />
            <span v-if="index !== pillows.length-1" class="align-self-center">Or</span>
          </span>
          <span class="text-muted">
            {{ pillow.name }}:  <strong> {{ pillow.quantity }} </strong>
          </span>
        </b-col>
      </b-row>
    </div>
  </template>
  <script>
  export default {
    props: {
      pillows: { type: Array, required: true }
    }
  }
  </script>
  
  <style scoped>
  strong {
    color: #212529;
  }
  p {
    font-size: 17px;
    text-decoration: underline;
  }
  @media only screen and (max-width: 576px) {
    /* For mobile phones: */
    .text-muted {
      font-size: 13px;
    }
  }
  </style>
  