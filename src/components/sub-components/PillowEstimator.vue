<template>
    <b-container>
      <b-row>
        <b-col cols="12" lg="5">
          <b-row>
            <b-col cols="12" md="6" lg="12" class="mb-2">
              <b-img center fluid :src="estimator.chartImage" :alt="estimator.title" />
            </b-col>
            <b-col cols="12" md="6" lg="12">
              <pillow-table :estimator="estimator" />
            </b-col>
          </b-row>
        </b-col>
         
        <b-col cols="12" lg="7">
          <pillow-form />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <h5 class="mt-5">
            INSTRUCTIONS:
          </h5>
          <p>
            Use this calculator to estimate the number of pillows required to seal an opening. Enter numbers into spaces where indicated.
          </p>
          <ul>
            <li>
                Step 1. Select measurement unit.
            </li>
            <li>
                Step 2. Enter the size of the opening in length and height in inches. To enter the dimensions in centimeters, select Centimeter above. Estimate and enter the amount of the area occupied by the penetrants. Computed area of each opening is multiplied by a factor of 1.4 to allow for required compression.            </li>
          </ul>
          <p><strong>IMPORTANT NOTE:</strong>Many different combinations of pillow sizes and percentages can be used to successfully seal a particular configuration. While the larger pillow sizes are more economical, the smaller sizes are more versatile. SSB26 are universally suitable for most openings.</p>
          <p>When sealing cable tray penetrations, two(2) SSB14 or SSB24's are recommended for sealing the channel area in 4\" (102mm) deep cable trays. SSB26's are recommended for 6\"(152mm) deep cable tray rails.</p>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import PillowTable from './PillowTable.vue'
  import PillowForm from './PillowForm.vue'
  export default {
    components: {
      PillowTable,
      PillowForm
    },
    props: {
      estimator: { type: Object, required: true }
    },
    data() {
      return {
        butt: "butt"
      }
    }
  }
  </script>
  