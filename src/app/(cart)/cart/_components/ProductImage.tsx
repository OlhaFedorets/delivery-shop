import { memo } from "react";
import Image from "next/image";

interface ProductImageProps {
    img: string;
    title: string;
}

const ProductImage = ({img, title }: ProductImageProps) => {
    return (
        <div
            className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center relative">
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded"
            />
        </div>
    );
}

export default ProductImage;