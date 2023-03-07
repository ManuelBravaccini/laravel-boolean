<script>

export default {
    name: 'BookComponent',
    props: [
        'book'
    ],
    data() {
        return {

        }
    },
    methods: {

    },

}

</script>

<template>
    <div class="col-5 my-2 p-2 border border-dark rounded">
        <div class="card-body">
            <h5 class=" card-title mb-2">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <img class="img-fluid" :src="book.cover_image" alt="">
            <button class="btn btn-primary mt-3 ">
                show more
            </button>
        </div>
    </div>
</template>

<style  lang="scss" scoped></style>