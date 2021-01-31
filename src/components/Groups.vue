<template>
    <div>
        <h1>Grupos</h1>

        <div v-for="g in groups" v-bind:key="g">
            <router-link :to="{ name:'Chat', params:{ room: g.id } }">
                {{ g.description }}
            </router-link>
            
        </div>
    </div>
</template>

<script>

import { getGroups } from "../helpers/fchat"

export default {
    mounted: async function(){
        this.groups = await getGroups()
        /*this.groups.then((res)=> {
            console.log(res)
        })*/
    },
    data() {
        return {
            groups:[]
        }
    },
}
</script>