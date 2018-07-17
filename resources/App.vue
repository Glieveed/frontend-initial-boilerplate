<template>
    <div id="app">
        <test-component></test-component>
    </div>
</template>
<script>

    import TestComponent from './components/TestComponent';

    export default {
        name: "App",
        data: () => ({

        }),
        components: {
            'test-component': TestComponent
        }
    }
</script>
<style lang="scss">

</style>