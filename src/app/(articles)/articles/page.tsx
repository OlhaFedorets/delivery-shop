import articlesDatabase from "@/data/articlesDatabase.json"
import ArticlesSection from "@/app/(articles)/ArticlesSection";

export const metadata = {
    title: 'Статьи на сайте магазина "Mypetshop"',
    description: 'Читайте статьи на сайте магазина "Mypetshop"',
};

const AllArticles = () => {
    const articles = articlesDatabase;

    return (
        <ArticlesSection
            title="Статьи"
            viewAllButton={{text: "На главную", href: "/"}}
            articles={articles}
        />
    )
}


export default AllArticles;