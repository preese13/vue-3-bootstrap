import { defineCustomElement } from 'vue'
import FirestopPillowEstimator from './FirestopPillowEstimator.ce.vue'
const PillowEstimator = defineCustomElement(FirestopPillowEstimator)

customElements.define('firestop-pillow-estimator', PillowEstimator)