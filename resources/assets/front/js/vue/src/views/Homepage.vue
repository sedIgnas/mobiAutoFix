<template>
    <ContainerLayout>
        <article class="font container main-container">
            <h1 class="text-center mt-5 pt-4">Get your vehicle fixed or fix someone's else!</h1>

            <div class="container">
                <div class="mt-4">
                    <b-card img-src="images/mechanic1.png" img-alt="Card image" img-left
                            class="mb-3 img-resize bgc-red">
                        <b-card-text>
                            <h4>Are you a mechanic? Are you here for work?</h4>
                            Here you will find requests from people, that are in need of service.
                            You will contact the person that is asking for some sort of service and arrange
                            a meeting between you. Make sure to settle financial matters beforehand.
                            <h5 class="mt-3">Repairs requests currently available: </h5>
                        </b-card-text>
                        <div>
                            <b-button @click="$router.push('Jobs')" block variant="outline-primary" class="mt-3">Then
                                get to work!
                            </b-button>
                        </div>
                    </b-card>

                    <b-card img-src="images/brokenCar1.png" class="img-resize bgc-green" img-alt="Card image" img-right>
                        <b-card-text>
                            <h4>Are you in need of help? Your car broke on the way to work?</h4>
                            Here you can make a request for help. Hopefully a skilled mechanic
                            will accept your request and come to your rescue. Don't forget to
                            write as much information as possible for the person looking into this
                        </b-card-text>
                        <div>
                            <b-button @click="$router.push('create-job')" block variant="outline-primary" class="mt-4">
                                Post a job request!
                            </b-button>
                        </div>
                    </b-card>
                </div>
            </div>
        </article>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';

export default {
    name: 'Directives',
    components: {
        ContainerLayout,
    },
};
</script>
<style lang="scss" scoped>
.main-container {
    background-color: #f1f1f1;
    height: 660px;
    border-radius: 20px;
    box-shadow: 13px 23px 82px #959ba1;
}

.img-resize {
    height: 250px;
}

.bgc-red {
    background: rgb(246, 173, 173);
    background: linear-gradient(29deg, rgba(246, 173, 173, 1) 0%, rgba(248, 249, 161, 1) 46%, rgba(248, 249, 161, 1) 54%, rgba(246, 173, 173, 1) 100%);
}

.bgc-green {
    background: rgb(171, 247, 180);
    background: linear-gradient(29deg, rgba(171, 247, 180, 1) 0%, rgba(213, 213, 246, 1) 46%, rgba(223, 233, 255, 1) 54%, rgba(138, 247, 168, 1) 100%);
}
</style>
