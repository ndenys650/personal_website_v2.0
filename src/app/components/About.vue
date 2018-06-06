<template>
    <div class="col-xl-5 col-md-12 my-3">  
        <h2 class="text-center">Nate Denys</h2>                 
        <div role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion1 class="custom-bg">About</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card overlay img-src="../../public/content/hero1.jpg" class="text-center" text-variant="white" img-alt="Banner Overlay"
                        title="Favorite Development Setup:<br>VueJS with Webpack"
                        sub-title="Subtitle">

                    <p class="col card-text" text-variant="black">
                    {{ aboutme }}
                    </p>                                
                </b-card>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion2 class="custom-bg">Goals</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card overlay img-src="../../public/content/hero5.jpg" text-variant="white" img-alt="Banner Overlay">
                        <p class="col card-text">
                        {{ aspirations }}
                        </p>
                    </b-card>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion4 class="custom-bg">Contact</b-btn>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                <b-card overlay img-src="../../public/content/hero3.jpg" text-variant="white" img-alt="Banner Overlay">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <div class="row justify-content-center text-center">
                            <b-form-group class="p-2" id="exampleInputGroup1"
                                            label="Email address:"
                                            label-for="exampleInput1">
                                <b-form-input id="exampleInput1"
                                            type="email"
                                            v-model="form.email"
                                            required
                                            >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group class="p-2" id="exampleInputGroup2"
                                            label="Your Name:"
                                            label-for="exampleInput2">
                                <b-form-input id="exampleInput2"
                                            type="text"
                                            v-model="form.name"
                                            required
                                            >
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <b-form-textarea class="p-1 justify-content-center" id="textarea1"
                                        placeholder="Message"
                                        v-model="form.message"
                                        :rows="5"
                                        :max-rows="6">
                        </b-form-textarea> 
                        <div class="row pt-3 justify-content-center">                                      
                            <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </div>
                    </b-form>                    
            </b-card>
            </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn class="custom-bg resume text-center" block href="../../public/content/Resume - Nathan Denys.pdf" target="_blank" v-b-toggle.accordion3>Resume</b-btn>
                </b-card-header>
            </b-card> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data () {
            return {
                aboutme: `
                    This is the most badass about me paragraph i think i've ever concocted
                    `,
                mygoals: `
                some more badassery if i must say
                `,
                aspirations: `
                getting thieres
                `,
                currentPage: 3,
                form: {
                    email: '',
                    name: '',
                    message: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                this.form.message = '';
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
            }
        }
    };
</script>

<style>

</style>