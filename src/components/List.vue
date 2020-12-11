<template>
    <div class="wrapper">
        <modal name="modal-form">
            <div class="modal-form">
                <div class="form-group">
                    <label class="form-group__label">Title</label>
                    <input v-model="title" class="form-group__text" type="text">
                </div>
                <div class="form-group">
                    <label class="form-group__label">Description</label>
                    <textarea v-model="description" class="form-group__text" rows="2"></textarea>
                </div>
            </div>
            <div class="btn-set">
                <button class="btn btn-default" style="margin-right: 1rem" @click="save">Save</button>
                <button class="btn btn-alert" @click="closeModal">Cancel</button>
            </div>
        </modal>
        <div class="content">
            <div class="column m-1" v-for="(column, index) in columns" :key="index">
                <a href="#" @click="addCardToColumn(column.id)">Add Card</a> | <a href="#">Delete Column</a>
                <h1 class="column__header">{{ column.name }}</h1>
                <draggable :list="column.cards" group="task" @start="drag=true" @change="updateColumns">
                    <div class="card" v-for="card in column.cards" :key="card.id" @click="showModal(card.id, card.title, card.description)">{{ card.title }}</div>
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
    data() {
        return {
            id: "",
            title: "",
            description: "",
            columnId: ""
        }
    },
    computed: {
        ...mapGetters('column', [
            'columns'
        ]),
    },
    methods: {
        ...mapActions('column', [
            'fetchColumns',
            'updateColumns',
            'updateCard',
            'addCard'
        ]),
        showModal(id, title, description) {
            this.title = title
            this.description = description
            this.id = id
            this.$modal.show('modal-form');
        },
        reset() {
            this.id = "",
                this.title = "",
                this.description = ""
            this.columnId = ""
        },
        closeModal() {
            this.reset()
            this.$modal.hide('modal-form');
        },
        save() {
            if (this.id) {
                this.updateCard({ id: this.id, title: this.title, description: this.description }).then(() => {
                    this.closeModal()
                })
            } else {
                this.addCard({ title: this.title, description: this.description, column: this.columnId }).then(() => {
                    this.closeModal()
                })
            }
        },
        addCardToColumn(columnId) {
            this.columnId = columnId
            this.$modal.show('modal-form');
        }
    },
    created() {
        this.fetchColumns()
        console.log(process.env.VUE_APP_API_URL)
    }
}
</script>
