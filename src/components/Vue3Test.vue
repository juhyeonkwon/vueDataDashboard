<template>
<div>
    {{state.test1}}
    {{state.test2}}

    <input v-model="state.test1" />
    <button v-on:click="state.abc();">dtdtd</button>
    {{state.compute}}

</div>
    
</template>

<script>
import { computed, reactive } from '@vue/reactivity'

export default {
    setup() {
        const state = reactive({
            test1 : 'dtd',
            test2 : 'dtd2',
            abc : function() {
                console.log('abc');
            },
            compute : computed(() => {
                return state.test1.toUpperCase();
            })            
        });




        return {
            state,
        }
    },
}
</script>

<style scoped>

</style>