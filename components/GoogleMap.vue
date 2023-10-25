<template>
    <div class="google-map-area pt_sm--130  pt_md--100  pt_lg--40 " id="support">
        <GmapMap
            :center="{lat:52.482900, lng:-1.893460}"
            :zoom="15"
            map-type-id="terrain"
        >
        </GmapMap>
    </div>
</template>
https://maps.app.goo.gl/9eCgfMXH4L4igcVu9
<script>
    export default {
        name: 'GoogleMap',
    }
</script>

<style lang="scss" scoped>
    .vue-map-container {
        height: 500px;
        // res
        @media #{$sm-layout}{
            height: 350px;
        }
    }
</style>
