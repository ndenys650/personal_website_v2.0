<template>
    <div class="col-xl-7 col-lg-12 col-md-12 my-3">
        <h2 class="text-center">Portfolio</h2>          
        <b-card-group deck>
            <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Img"
                    img-top>
                <p class="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content
                    is a little bit longer.
                </p>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </b-card>
            <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Img"
                    img-bottom>
                <p class="card-text">
                    This card has supporting text below as a natural lead-in
                    to additional content.
                </p>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </b-card>
        </b-card-group>                        
    </div>
</template>

<script>
export default {
    name: 'Profile'
};
</script>

<style>

</style>