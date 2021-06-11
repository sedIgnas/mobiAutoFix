<template>
    <ContainerLayout>
        <h1>Sorry, but the page you are looking for is not there</h1>
        <div>
         <img src="images/shrugPic.jpg" img-alt="Old dude shrugs">
        </div>
        <b-button @click="$router.push('/')" block variant="outline-primary" class="mt-3">I'd like to go back
        </b-button>
    </ContainerLayout>
</template>
<script>

import ContainerLayout from '@/layouts/ContainerLayout.vue';

export default {
    name: 'NotFound',
    components: {
        ContainerLayout,
    },
}
</script>

<style lang="scss" scoped>
h1, h5 {
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    color: lightgrey;
}
</style>
