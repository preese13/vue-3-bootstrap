<template>
    <div>
      <p class="text-center mt-2 mb-2">
        1. Select Measurement Unit
      </p>
      <b-row>
        <b-col>
          <b-form-radio-group
            v-model="unit"
            class="text-center"
            :options="[
              { text: 'Inches', value: 'inches' },{ text: 'Centimeters', value: 'cm' },]"
            plain
            name="plain-inline"
          />
        </b-col>
      </b-row>
  
      <p class="text-center mt-2 mb-2">
        2. Enter Penetration Information
      </p>
      <b-row>
        <b-col cols="6" md="3" class="text-center">
          <label for="length">Length</label>
          <b-input-group class="mb-3" size="sm" :append="unit === 'inches' ? 'in' : 'cm'">
            <b-form-input
              id="length"
              v-model="length"
              :on-change="calcOpening()"
              type="number"
              min="0"
              class="text-center"
              size="sm"
            />
          </b-input-group>
        </b-col>
        <b-col cols="6" md="3" class="text-center">
          <label for="height">Height</label>
          <b-input-group class="mb-3" size="sm" :append="unit === 'inches' ? 'in' : 'cm'">
            <b-form-input
              id="height"
              v-model="height"
              :on-change="calcOpening()"
              type="number"
              min="0"
              class="text-center"
              size="sm"
            />
          </b-input-group>
        </b-col>
        <b-col cols="6" md="3" class="text-center">
          <label for="penetrants">% Penetrants</label>
          <b-input-group class="mb-3" size="sm" append="%">
            <b-form-input
              id="penetrants"
              v-model="penetrants"
              :on-change="calcOpening()"
              type="number"
              min="0"
              class="text-center"
              size="sm"
            />
          </b-input-group>
        </b-col>
        <b-col cols="6" md="3" class="text-center">
          <label>Area</label>
          <b-input-group class="mb-3" size="sm" :append-html="unit === 'inches' ? 'in<sup>2</sup>' : 'cm<sup>2</sup>'">
            <b-form-input
              v-model="netArea"
              :on-change="calcOpening()"
              class="text-center"
              size="sm"
              disabled
            />
          </b-input-group>
        </b-col>
      </b-row>
      <hr>
      <b-button
        class="mt-2 mb-2"
        :style=" !formIsValid ? 'cursor: not-allowed' : ''"
        :disabled=" !formIsValid"
        type="submit"
        size="sm"
        variant="outline-dark"
        @click="calculate"
      >
        Calculate
      </b-button>
      <b-button class="mt-2 mb-2" type="reset" size="sm" variant="danger" @click="onReset">
        Reset
      </b-button>
      <hr>
      
      <div id="devices-required" class="text-center">
        <h5 class="text-center">
          Pillows 
        </h5>
        <b-row>
          <pillows-required :pillows="results" /> 
        </b-row>
      </div>
    </div>
  </template>
<script>
  import PillowsRequired from './PillowsRequired.vue'
  export default {
    components: {
      PillowsRequired
    },
    data() {
      return {
        unit: 'inches',
        length: 0,
        height: 0,
        penetrants: 0,
        netArea: 0,
        totalFillEach: 0,
        results: [
          {
            name: 'SSB14',
            quantity: 0,
            imageUrl:
              'https://api.stifirestop.com/storage/products/ssb/images/ssb-ordering-item-ssb14.png'
          },
          {
            name: 'SSB24',
            quantity: 0,
            imageUrl:
              'https://api.stifirestop.com/storage/products/ssb/images/ssb-ordering-item-ssb24.png'
          },
          {
            name: 'SSB26',
            quantity: 0,
            imageUrl:
              'https://api.stifirestop.com/storage/products/ssb/images/ssb-ordering-item-ssb26.png'
          },
          {
            name: 'SSB36',
            quantity: 0,
            imageUrl:
              'https://api.stifirestop.com/storage/products/ssb/images/ssb-ordering-item-ssb36.png'
          }
        ]
      }
    },
    computed: {
      formIsValid() {
        const lengthIsValid = !!this.length && this.length > 0
        const heightIsValid = this.height > 0
        const penetrantsIsValid = this.penetrants >= 0
        if (lengthIsValid && heightIsValid && penetrantsIsValid) return true
        return false
      }
    },
    methods: {
      roundOneDigit(number) {
        let result
        if (number) result = Math.round(number * 10) / 10
        else result = 0
        return result
      },
      getArea: (area, unit) => {
        // If unit is equal to cm, convert area to cm square
        if (unit === 'cm') return parseFloat((area * 6.4516).toFixed(1))
        return area
      },
      calcOpening() {
        // compress factor
        const compressFactor = 1.4
        //	area
        const calculatedArea = this.roundOneDigit(
          parseFloat(this.length) * parseFloat(this.height)
        )
        //	area of penetrants
        const calculatedAreaOfPenetrants =
          (parseFloat(calculatedArea) * parseFloat(this.penetrants)) / 100
        //	net area
        const netArea = this.roundOneDigit(
          parseFloat(calculatedArea) - parseFloat(calculatedAreaOfPenetrants)
        )
        // set netArea value
        this.netArea = netArea
        //	Multiply by compress factor
        const totalFillEach = this.roundOneDigit(
          parseFloat(netArea) * parseFloat(compressFactor)
        )
        // Set totalFillEach
        this.totalFillEach = totalFillEach
      },
      calculate() {
        // Sets ssb14 quantity
        this.results[0].quantity = Math.ceil(
          this.totalFillEach / this.getArea(4, this.unit)
        )
        // Sets ssb24 quantity
        this.results[1].quantity = Math.ceil(
          this.totalFillEach / this.getArea(8, this.unit)
        )
        // Sets ssb26 quantity
        this.results[2].quantity = Math.ceil(
          this.totalFillEach / this.getArea(12, this.unit)
        )
        // Sets ssb36 quantity
        this.results[3].quantity = Math.ceil(
          this.totalFillEach / this.getArea(18, this.unit)
        )
      },
      onReset(evt) {
        evt.preventDefault()
        this.unit = 'inches'
        this.length = 0
        this.height = 0
        this.penetrants = 0
        this.results[0].quantity = 0
        this.results[1].quantity = 0
        this.results[2].quantity = 0
        this.results[3].quantity = 0
      }
    }
  }

</script>
