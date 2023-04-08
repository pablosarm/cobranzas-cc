<template>
  <div>
    <h2>{{ title }}</h2>
    <canvas ref="chart"></canvas>
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
      const ctx = this.$refs.chart.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: auto;
}
</style>
