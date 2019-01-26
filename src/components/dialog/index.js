import Dialog from 'comp/dialog/dialog.vue';

const dialog = {
    install(Vue, options) {
    	console.log(Vue)
        Vue.component("Dialog", Dialog)
    }
}

export default dialog;