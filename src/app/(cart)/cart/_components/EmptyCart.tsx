import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Корзина</h1>
            <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Ваша корзина пуста</p>
                <Link
                    href="/"
                    className="inline-block bg-[#ff6633] text-white px-6 py-2 rounded hover:bg-[#e55a2b] transition-colors"
                >
                    Вернуться к покупкам
                </Link>
            </div>
        </div>
    )
}
export default EmptyCart;