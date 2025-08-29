import articlesDatabase from "@/data/articlesDatabase.json"
import ArticlesSection from "@/app/(articles)/ArticlesSection";

export const metadata = {
    title: 'Статьи на сайте магазина "Северяночка"',
    description: 'Читайте статьи на сайте магазина "Северяночка"',
};

const AllArticles = () => {
    const articles = articlesDatabase;

    return (
        <ArticlesSection
            title="Articles"
            viewAllButton={{text: "Go to main", href: "/"}}
            articles={articles}
        />
    )
}


export default AllArticles;