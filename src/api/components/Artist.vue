<template>
    <li>
        <h2><a v-bind:href="artist.url" target="_blank">{{artist.name}}</a></h2>
    </li>
</template>

<script>
export default {
    name:'artist',
    props: ['artist']
}
</script>

<style lang="sass" scoped>
li
    display: block
    margin: 10px 0
</style>
