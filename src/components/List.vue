<template>
    <div class="wrapper">
        <modal name="my-first-modal">
            <div class="modal-form">
                <div class="form-group">
                    <label class="form-group__label">Title</label>
                    <input class="form-group__text" type="text" placeholder="Email">
                </div>
                <div class="form-group">
                    <label class="form-group__label">Description</label>
                    <textarea class="form-group__text" rows="4"></textarea>
                </div>
            </div>

            <div class="button-set">
                <button id="goto-signin-btn" >Sign In</button>
                <button id="register-btn" >Register</button>
            </div>
        </modal>
        <div class="content">
            <div class="column m-1" v-for="(column, index) in columns" :key="index">
                <h1 class="column__header">{{ column.name }}</h1>
                <draggable :list="column.cards" group="task" @start="drag=true" @change="updateColumns">
                    <div class="card" v-for="card in column.cards" :key="card.id" @click="showModal">{{ card.title }}</div>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
import '../../public/style.scss'
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
            'fetchColumns',
            'updateColumns'
        ]),
        showModal() {
            this.$modal.show('my-first-modal');
        }
    },
    created() {
        this.fetchColumns()
        console.log(process.env.VUE_APP_API_URL)
    }
}
</script>
