<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <MainTemplate title="Inicio">
      <h1 class="text-center mb-5">Contratos</h1>
      <v-row>
        <v-col
          v-for="contract in paginatedContracts"
          :key="contract.id"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img :src="contract.image" height="200"></v-img>
            <v-card-title class="text-h5 mt-3">{{
              contract.address
            }}</v-card-title>
            <v-card-text>
              <v-btn color="primary" text @click="viewContract(contract)">
                <v-icon>mdi-eye</v-icon>
                <span class="ml-2">Ver</span>
              </v-btn>
              <v-btn color="warning" text @click="editContract(contract)">
                <v-icon>mdi-pencil</v-icon>
                <span class="ml-2">Editar</span>
              </v-btn>
              <v-btn color="success" text @click="addClient(contract)">
                <v-icon>mdi-plus</v-icon>
                <span class="ml-2">Agregar Cliente</span>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-model="currentPage"
        :length="Math.ceil(contracts.length / itemsPerPage)"
        circle
        class="my-5"
      ></v-pagination>
    </MainTemplate>
  </v-container>
</template>

<script>
import MainTemplate from "@/templates/Main.vue";

export default {
  components: {
    MainTemplate,
  },
  data() {
    return {
      contracts: [
        {
          id: 1,
          image: "https://picsum.photos/400/200?random=1",
          address: "Calle Falsa 123, San Fernando del Valle de Catamarca",
        },
        {
          id: 2,
          image: "https://picsum.photos/400/200?random=2",
          address: "Calle Falsa 456, San Fernando del Valle de Catamarca",
        },
        {
          id: 3,
          image: "https://picsum.photos/400/200?random=3",
          address: "Calle Falsa 789, San Fernando del Valle de Catamarca",
        },
        // ...
      ],
      currentPage: 1,
      itemsPerPage: 3,
    };
  },
  computed: {
    paginatedContracts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contracts.slice(startIndex, endIndex);
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    viewContract(contract) {
      // ...
    },
    // eslint-disable-next-line no-unused-vars
    editContract(contract) {
      // ...
    },
    // eslint-disable-next-line no-unused-vars
    addClient(contract) {
      // ...
    },
  },
};
</script>
