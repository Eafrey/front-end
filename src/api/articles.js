import { get, post } from "@/utils/request";
import apiConstants from "@/api/apiConstants";

async function getArticles(page, size) {
    return get(`${apiConstants.GET_ARTICLES_BY_PAGE}?page=${page}&size=${size}&sort=creationTime,desc`);
  }
  
async function getArtcile(id) {
    return get(`${apiConstants.GET_ARTICLE}/${id}`);
}

async function getCatalogs() {
    return get(apiConstants.GET_ARTCILE_CATALOGS);
}

async function saveArticle() {
    return post(apiConstants.SAVE_ARTCILE);
}

export { getArticles, getArtcile, getCatalogs, saveArticle };
  