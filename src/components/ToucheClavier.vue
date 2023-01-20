<template>
    <button class="phonetile">{{ number }}</button>
</template>

<script>

export default{
    name: "ToucheClavier",
    props: [
        'number'
    ]
}
</script>

<style scoped>

.phonetile{
    background-color: rgb(143, 254, 143);
    color: black;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    font-size: 24px;
    text-align: center;
}

</style>