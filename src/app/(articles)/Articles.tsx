import articlesDatabase from "@/data/articlesDatabase.json"
import ArticlesSection from "@/app/(articles)/ArticlesSection";


const Articles = () => {
    const articles = articlesDatabase;

    return (
        <ArticlesSection
            title="Articles"
            viewAllButton={{text: "All articles", href: "articles"}}
            articles={articles}
            compact
        />
    )
}


export default Articles;