<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <MainTemplate title="Inicio">
      <v-container>
        <v-card class="pa-4">
          <v-row class="align-items-center">
            <v-col cols="2">
              <v-icon color="red" size="36" class="red-bell"
                >mdi-bell-ring</v-icon
              >
            </v-col>
            <v-col cols="10">
              <span class="subtitle-2 font-weight-bold"
                >Contratos vencidos:
              </span>
              <span class="subtitle-1">{{ expiredContracts }}</span>
            </v-col>
          </v-row>
          <v-row class="align-items-center">
            <v-col cols="2">
              <v-icon color="orange" size="36">mdi-bell</v-icon>
            </v-col>
            <v-col cols="10">
              <span class="subtitle-2 font-weight-bold"
                >Contratos próximos a vencer:
              </span>
              <span class="subtitle-1">{{ expiringContracts }}</span>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="mt-2">
          <v-col cols="12" md="6" lg="3">
            <v-card color="primary" dark>
              <v-card-title class="white--text">Clientes</v-card-title>
              <v-card-text class="text-h5 white--text">{{
                totalClients
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="warning" dark>
              <v-card-title>Cobros pendientes</v-card-title>
              <v-card-text class="text-h5">{{
                pendingCollections
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="success" dark>
              <v-card-title>Cobros realizados</v-card-title>
              <v-card-text class="text-h5">{{
                completedCollections
              }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="info" dark>
              <v-card-title>Ingresos</v-card-title>
              <v-card-text class="text-h5">{{ totalIncome }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="align-self-stretch">
            <bar-chart
              :title="'Cobros por departamento'"
              :chart-data="collectionsByDepartment"
              :chart-options="chartOptions"
            ></bar-chart>
          </v-col>
          <v-col cols="12" md="6" class="align-self-stretch">
            <doughnut-chart
              :title="'Cobros pendientes vs completados'"
              :chart-data="collectionsPendingVsCompleted"
              :chart-options="chartOptions"
            ></doughnut-chart>
          </v-col>
        </v-row>
      </v-container>
    </MainTemplate>
  </div>
</template>

<script>
import MainTemplate from "@/templates/Main.vue";
import BarChart from "@/components/Barchart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    MainTemplate,
    BarChart,
    DoughnutChart,
  },
  data() {
    return {
      totalClients: 523,
      pendingCollections: 230,
      completedCollections: 293,
      expiredContracts: 2,
      expiringContracts: 4,
      totalIncome: "$420,000",
      chartOptions: {
        responsive: true,
        aspectRatio: 1,
      },
      collectionsByDepartment: {
        labels: ["Ventas", "Soporte", "Finanzas", "Marketing"],
        datasets: [
          {
            label: "Cobros",
            backgroundColor: ["#66BB6A", "#FFA726", "#FF7043", "#42A5F5"],
            data: [2, 5, 10, 3],
          },
        ],
      },
      collectionsPendingVsCompleted: {
        labels: ["Pendientes", "Completados"],
        datasets: [
          {
            backgroundColor: ["#EF5350", "#66BB6A"],
            data: [230, 293],
          },
        ],
      },
    };
  },
};
</script>

<style>
.v-toolbar {
  margin-top: 0;
}

.red-bell {
  animation: shake 0.8s ease-in-out 3;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px) rotate(5deg);
  }
  75% {
    transform: translateX(-5px) rotate(-5deg);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
