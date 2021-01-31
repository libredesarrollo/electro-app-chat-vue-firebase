<template>
  <div>
    <h1>Mensajes</h1>

    <div v-for="m in msjs" v-bind:key="m">
      {{ m }}
    </div>

    <textarea v-model="msj"></textarea>
    <button @click="send">Enviar</button>
  </div>
</template>
<script>
import { getChats, sendMsj } from "../helpers/fchat";

export default {
  data() {
    return {
      msjs: [],
      msj: "",
    };
  },
  mounted() {

    if(this.$root.auth.uid == ""){
      this.$router.replace({ name:"Login" })
    }

    let t = this;

    getChats(this.$route.params.room).on("value", (snapshot) => {
      t.msjs = [];
      snapshot.forEach(function (child) {
        t.msjs.push(child.val().text);
      });
    });
  },
  methods: {
    send: function () {
      if (this.msj.trim() == "") return;
      sendMsj(this.$route.params.room, this.msj.trim(), this.$root.auth);
    },
  },
};
</script>