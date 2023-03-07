<template>
    <div>
        <h1 class="text-center">SingleBook</h1>
        <div class="col-5 my-2 p-2 border border-dark rounded">

            <div class="card-body">


                <h5 class="card-title mb-2">{{ book.title }}</h5>
                <p class="card-text">{{ book.author }}</p>
                <p class="card-text">{{ book.description }}</p>
            </div>
        </div>
    </div>
</template>


<script>

import BookComponent from '../components/BookComponent.vue';
import axios from 'axios';


export default {
    name: 'SingleBook',
    components: {
        BookComponent
    },
    data() {
        return {
            urlAddress: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getBook() {
            axios.get(this.urlAddress + `/api/books/${this.$route.params.id}`, {

            })
                .then((response) => {
                    this.book = response.data.results;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.getBook();
    }
}

</script>
<style lang="scss" scoped></style>