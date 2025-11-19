import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl xl:text-[64px] font-bold mb-8 md:mb-10 xl:mb-15">
                Корзина
            </h1>
            <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Ваша корзина пуста</p>
                <Link
                    href="/"
                    className="inline-block bg-secondary text-white px-6 py-2 rounded hover:bg-primary transition-colors"
                >
                    Вернуться к покупкам
                </Link>
            </div>
        </div>
    )
}
export default EmptyCart;