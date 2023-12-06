<template>
    <b-table-simple
      small
      bordered
      responsive
      class="text-center"
    >
      <b-thead head-variant="dark">
        <b-tr>
          <b-th
            colspan="7"
          >
          PILLOW CROSS-SECTIONAL AREA
          </b-th>
        </b-tr>
        <b-tr>
          <b-th rowspan="2" style="vertical-align:middle">
            Pillow <br> Model
          </b-th>
          <b-th colspan="2" style="vertical-align:middle">
            Length
          </b-th>
          <b-th colspan="2" style="vertical-align:middle">
            Height
          </b-th>
          <b-th colspan="2" style="vertical-align:middle">
            Area
          </b-th>
        </b-tr>
        <b-tr>
          <b-th style="vertical-align:middle">
            in
          </b-th>
          <b-th style="vertical-align:middle">
            cm
          </b-th>
          <b-th style="vertical-align:middle">
            in
          </b-th>
          <b-th style="vertical-align:middle">
            cm
          </b-th>
          <b-th style="vertical-align:middle">
            in<sup>2</sup>
          </b-th>
          <b-th style="vertical-align:middle">
            cm<sup>2</sup>
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(model, index) in estimator.models" :key="index">
          <b-td>
            {{ model.name }}
          </b-td>
          <b-td>
            {{ model.length }}
          </b-td>
          <b-td variant="secondary">
            {{ toCM(model.length, 1) }}
          </b-td>
          <b-td>
            {{ model.height }}
          </b-td>
          <b-td variant="secondary">
            {{ toCM(model.height, 1) }}
          </b-td>
          <b-td>
            {{ calArea(model.length, model.height) }}
          </b-td>
          <b-td variant="secondary">
            {{ convertAreaToCM(model.length, model.height) }}
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </template>

<script>
  import { BTableSimple, BTd, BTr, BTh, BTbody, BThead } from 'bootstrap-vue'
  export default {
    components: { BTableSimple, BTd, BTr, BTh, BTbody, BThead },
    props: {
      estimator: { type: Object, required: true }
    },
    data() {
      return {}
    },
    methods: {
      toCM: (val, roundOff) => (val * 2.54).toFixed(roundOff),
      calArea: (length, height) => length * height,
      convertAreaToCM(length, height) {
        // convert dimensions to 'cm' and round off to two decimal places
        return (this.toCM(length, 2) * this.toCM(height, 2)).toFixed(1)
      }
    }
}
</script>
