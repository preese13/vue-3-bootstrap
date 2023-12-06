<template>
      <pillow-estimator class="mt-3" :estimator="estimator" />
  </template>
  
  <script>
    import PillowEstimator from './sub-components/PillowEstimator.vue'

  export default {
    components: {
      PillowEstimator
    },
    data() {
      return {
        assetsUrl: 'https://staging-assets.stifirestop.com/',
        apiUrl: 'https://pat-dev-api.stifirestop.com/',
        estimator: {
          title: 'Firestop Pillow Estimator',
          chartImage:
          'https://staging-assets.stifirestop.com/estimators/pillow/pillow_chart.jpg',
          models: [
            {
              name: 'SSB14',
              length: 4,
              height: 1
            },
            {
              name: 'SSB24',
              length: 4,
              height: 2
            },
            {
              name: 'SSB26',
              length: 6,
              height: 2
            },
            {
              name: 'SSB36',
              length: 6,
              height: 3
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style>
  </style>