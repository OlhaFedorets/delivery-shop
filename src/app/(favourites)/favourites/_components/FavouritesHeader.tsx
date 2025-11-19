interface FavouritesHeaderProps {
    itemCount: number;
}

const FavouritesHeader = ({ itemCount }: FavouritesHeaderProps) => {
    return (
        <div className="relative w-full max-w-[336px] md:w-[336px] h-24">
            <h1 className="text-4xl md:text-5xl xl:text-[64px] font-bold mb-8 md:mb-10 xl:mb-15">
                Избранное
            </h1>
            {itemCount > 0 && (
                <div
                    className="absolute ml-5 -top-4 right-25 md:right-10 xl:-right-20 bg-secondary rounded px-2 py-1">
                    <span className="text-base text-white">{itemCount}</span>
                </div>
            )}
        </div>
    );
};

export default FavouritesHeader;