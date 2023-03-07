<!-- <script>
import axios from 'axios';
import BookComponent from './BookComponent.vue';
export default {
    name: 'Appmain',
    components: {
        BookComponent
    },
    data() {
        return {
            books: [],
            urlAddress: 'http://127.0.0.1:8000/api/books/'
        }
    },
    methods: {
        getBook() {
            axios.get(this.urlAddress, {
                params: {

                }
            })
                .then((response) => {

                    this.books = response.data.result.data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
    },
    created() {
        this.getBook();
    },
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row  justify-content-around">
                <BookComponent v-for="book in books" :book="book" />
            </div>
        </div>
    </section>
</template>

<style  lang="scss" scoped></style> -->