import React from 'react';
import Article from './Article';

function ArticleList({posts}){
    const singleArticle = posts.map(post => {
        return <Article key={post.id} date={post.date} preview={post.preview} title={post.title} />
    })
    return <main>
        {singleArticle}
    </main>
}
export default ArticleList;