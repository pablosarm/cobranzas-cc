<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
};
</script>
