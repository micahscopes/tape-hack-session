<template>
    <div>
        <input v-model:value="inputtext">
        <p id="output">{{inputtext}}</p>
    </div>
</template>

<script>
  export default {
    name: 'myinput',
    props: [
      'inputtext'
    ]
  }
</script>
