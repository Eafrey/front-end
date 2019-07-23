<template>
<div class="container">
    <editor v-model="editContent" previewStyle="vertical"/>
    <viewer/>
</div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor'
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import { Viewer } from '@toast-ui/vue-editor'
export default {
    data() {
        return {
            editContent: '',
        }
    },
    components: {
        'editor': Editor,
        'viewer': Viewer
    }
}
</script>

<style scoped>
.container {
    height: 100%;
}
</style>
