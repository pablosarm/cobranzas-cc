<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <MainTemplate title="Clientes">
      <v-container>
        <v-card>
          <v-card-title>
            <span class="headline">Clientes</span>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="clients"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editClient(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small @click="deleteClient(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </MainTemplate>
  </div>
</template>

<script>
import MainTemplate from "@/templates/Main.vue";

export default {
  name: "ClientTable",
  components: {
    MainTemplate,
  },
  data() {
    return {
      headers: [
        {
          text: "Apellido",
          value: "lastName",
        },
        {
          text: "Nombre",
          value: "firstName",
        },
        {
          text: "Contratos",
          value: "numContracts",
        },
        {
          text: "Acciones",
          value: "actions",
          sortable: false,
        },
      ],
      clients: [
        {
          firstName: "Pablo",
          lastName: "Sarmiento",
          numContracts: 3,
        },
        {
          firstName: "Zamira",
          lastName: "Farah",
          numContracts: 2,
        },
        {
          firstName: "Carla",
          lastName: "Farah",
          numContracts: 3,
        },
        {
          firstName: "Carlos",
          lastName: "Farah",
          numContracts: 2,
        },
        {
          firstName: "Nicolas",
          lastName: "Sarmiento",
          numContracts: 3,
        },
        {
          firstName: "Monica",
          lastName: "Romero",
          numContracts: 2,
        },
      ],
    };
  },
  created() {
    this.$vuetify.lang.current = "es";
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    editClient(client) {
      // ...
    },
    // eslint-disable-next-line no-unused-vars
    deleteClient(client) {
      // ...
    },
  },
};
</script>
