<template>
  <v-app>
    <v-app-bar app dense color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Perfil</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Configuración</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
    <v-footer app color="blue darken-3" dark>
      <span class="white--text">&copy; CardioCuore r 2023</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "MainTemplate",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Inicio", route: "/" },
        { title: "Clientes", route: "/clientes" },
        { title: "Contratos", route: "/contratos" },
      ],
    };
  },
};
</script>
