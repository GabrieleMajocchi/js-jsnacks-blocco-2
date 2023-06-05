const { createApp } = Vue

createApp({
    data(){
        return {
            array: ['primo elemento', 'secondo elemento', 'terzo elemento', 'quarto elemento',]
        }

    }
}).mount('#app')