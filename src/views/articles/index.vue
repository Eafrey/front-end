<template>
    <div :class='$style.container'>
        <el-card :class="$style['article-card']" :key="article.id" v-for="article in articles">
            <div slot="header" class="clearfix">
                <div :class="$style['article-header1']">
                    <span :class="$style['article-title']">{{ article.title }}</span>
                </div>
                <div :class="$style['article-header2']">
                    <div :class="$style['article-tags']">
                        <Tag :class="$style['article-tag']" :key="article.id+tag" :text="tag" v-for="tag in article.tags"></Tag>
                    </div>
                    <div :class="$style['creation-time']">{{ article.creationTime }}</div>
                </div>
            </div>
            <div :class="$style['article-content']">
                {{ `${article.content.substring(0, 100)}...` }}
            </div>
        </el-card>
        <el-pagination :class='$style.pagination'
            v-if="totalPages>1"
            background
            layout="prev, pager, next"
            :total="totalArticles"
            :page-count="totalPages"
            :page-size="pageSize"
            @current-change="onChangeCurrent">
        </el-pagination>
    </div>
</template>

<script>
import {getArticles} from "@/api/articles.js"
import Tag from "@/components/Tag";

export default {
    components: {Tag},
    data() {
        return {
            articles: [],
            totalArticles: 0,
            totalPages: 1,
            currentPage: 0,
            pageSize: 3,
        };
    },
    mounted() {
        this.getArticlesByPage(0);
    },
    methods: {
        onChangeCurrent(current) {
            this.getArticlesByPage(current-1);
        },
        getArticlesByPage(currentPage) {
            getArticles(currentPage, this.pageSize).then(res => {
                this.articles = res.content;
                this.totalArticles = res.totalElements;
                this.totalPages = res.totalPages;

                this.articles.map(article => {
                    article.tags = article.tags.split(",");
                    return article;
                })
            })
        },
    }
}
</script>

<style lang="scss" module>
    .container {
        padding: 20px 200px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .article-card {
            width: 760px;
            margin-bottom: 10px;

            .article-header1 {
                .article-title {
                    font-size: 20px;
                    font-weight: 500;
                }
            }

            .article-header2 {
                display: flex;
                flex-direction: row;
                margin-top: 6px;

                .article-tags {
                    flex-grow: 1;

                    :not(:first-child) {
                        margin-left: 6px;
                    }
                }

                .creation-time {
                    font-size: 14px;
                }
            }

            .article-content {

            }
        }

        .pagination {
            margin-top: 14px;
        }
    }
</style>
