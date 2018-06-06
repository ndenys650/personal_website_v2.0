<template>
    <b-navbar type="dark" class="custom-bg" fixed="bottom">
        <div class="container">                         
            <b-navbar-nav class="d-flex flex-row"> 
                    <b-nav-item target="_blank" href="https://www.linkedin.com/in/nathan-denys/" >
                        <font-awesome-icon class="mx-2" :icon="['fab', 'linkedin']" size="2x" />
                    </b-nav-item>                                
                    <b-nav-item target="_blank" href="https://github.com/ndenys650">
                        <font-awesome-icon class="mx-2"  :icon="['fab', 'github']" size="2x" />
                    </b-nav-item>
                    <b-nav-item href="mailto:nate_denys@yahoo.com" >
                        <font-awesome-icon class="mx-2"  icon="at" size="2x" />
                    </b-nav-item>                   
                </b-navbar-nav>
            <b-navbar-brand right href="#" v-b-tooltip.hover v-b-tooltip.html.leftbottom title="Copyright © natedenys.com">Nate Denys</b-navbar-brand>                                      
        </div>
    </b-navbar>  
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

    export default {
        name: 'NavBar',
        components: {
            FontAwesomeIcon
        }
        
    };
</script>

<style>
</style>