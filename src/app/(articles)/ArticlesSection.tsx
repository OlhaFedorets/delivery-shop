import ViewAllButton from "@/components/ViewAllButton";
import ArticleCard from "@/app/(articles)/ArticleCard";
import {ArticleSectionProps} from "@/types/articlesSection";

const ArticlesSection = ({
                             title,
                             viewAllButton,
                             articles,
                             compact = false
                         }: ArticleSectionProps) => {
    return (
        <section
            className={`flex flex-col text-[#414141] mb-4 md:mb-8 xl:mb-10 ${!compact ? "px-[max(12px,calc((100%-1208px)/2))]" : "mt-20"}`}>
            <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                <h2 className="text-2xl xl:text-4xl text-left font-bold">{title}</h2>
                {viewAllButton && (
                    <ViewAllButton btnText={viewAllButton.text} href={viewAllButton.href}/>
                )}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <li key={index} className={`h-75 md:h-105 ${
                        compact
                            ? `${index >= 4 ? "hidden" : ""}
                ${index >= 3 ? "md:hidden xl:block" : ""}
                ${index >= 4 ? "xl:hidden" : ""}`
                            : ""
                    }`}>
                        <ArticleCard {...article} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ArticlesSection;