<template>
<div class="container">
    <h2 class="title">Create Article</h2>
    <div class="markdown-content">
        <editor v-model="editContent" previewStyle="vertical" class="editor"/>
        <viewer/>
    </div>
    <el-button  type="primary" class="publish-button" :loading="isPublishing" @click="publishArticle">Publish</el-button>
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
            isPublishing: false,
        }
    },
    components: {
        'editor': Editor,
        'viewer': Viewer
    },
    methods: {
        publishArticle() {
            this.isPublishing = true;
            setTimeout(() => {
                this.isPublishing = false;
            }, 3000);
            console.log('editContent', this.editContent);
        }
    }
}
</script>

<style lang='scss' scoped>
.container {
    display: flex;
    height: 100%;

    .title {
        margin: 20px;
    }

    .markdown-content {
        flex-grow: 1;

        .editor {
            height: 100% !important;
        }
    }

    .publish-button {
        margin: 30px 20px;
    }
    
}
</style>
