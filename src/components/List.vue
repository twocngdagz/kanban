<template>
    <div class="min-h-screen bg-grey-light p-8 text-center">
        <div class="max-w-sm mx-auto flex">
            <div class="card m-1" v-for="(column, index) in columns" :key="index">
                <h1 class="text-2xl font-bold mb-6">{{ column.name }}</h1>
                <draggable :list="column.cards" group="task" @start="drag=true" @change="log">
                    <div class="card m-1" v-for="card in column.cards" :key="card.id">{{ card.title }}</div>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        draggable
    },
    computed: {
        ...mapGetters('column', [
            'columns'
        ]),
    },
    methods: {
        ...mapActions('column', [
            'fetchColumns'
        ]),
        log(e) {
            console.log(e)
        }
    },
    created() {
        this.fetchColumns()
        console.log(process.env.API_URL)
    }
}
</script>
