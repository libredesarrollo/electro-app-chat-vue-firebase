<template>
    <div>

        <h1>Login</h1>

        <h5 v-if="error">{{error.message}}</h5>

        <label for="">Usuario</label>
        <input type="text" v-model="user.username">

        <label for="">Contraseña</label>
        <input type="text" v-model="user.password">

        <button @click="auth">Login</button>

    </div>
</template>

<script>

import signWithEmailPassword from "../helpers/fauth"

export default {
    data() {
        return {
            user:{
                username:"pepe@test.com",
                password:"123456"
            },
            error:""
        }
    },
    methods: {
       auth: function(){
           //TODO: conectarse a firebase
           
           signWithEmailPassword(this.user.username, this.user.password).then((user) => {
            //this.userlogin = user
            this.error = ""

            this.$root.auth.email = user.user.email;
            this.$root.auth.uid = user.user.uid;

            this.$router.replace({ name:"Groups" })
        })
        .catch((error) => {
            this.error = error
        });
       } 
    },
}
</script>