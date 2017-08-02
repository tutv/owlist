<template>
    <div class="login-page">
        <!-- Standard -->
        <b-card header="Login" class="mb-2">
            <b-button :variant="'primary'" @click.prevent="loginFacebook">
                Facebook
            </b-button>

        </b-card>
    </div>
</template>

<script>
    import firebase from 'firebase';

    let provider = new firebase.auth.FacebookAuthProvider();
    export default {
        name: 'login',
        methods: {
            loginFacebook: function () {
                let that = this;

                firebase.auth().signInWithPopup(provider).then(function (result) {
                    console.log(that.$store);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
