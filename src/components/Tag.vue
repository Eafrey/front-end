<template>
    <div :class="$style.tag">{{ text }}</div>
</template>

<script>
    export default {
        name: "Tag",
        props: {
            text: String
        }
    }
</script>

<style lang="scss" module>
    .tag {
        border: 1px solid $color-text-regular;
        padding: 2px;
        font-size: 12px;
        border-radius: 4px;
        display: inline-block;
    }
</style>