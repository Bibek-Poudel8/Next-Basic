"use client";

import { useParams } from 'next/navigation';

const ProductsIdPage = () => {
    const params = useParams<{ id?: string }>();
    const id = params?.id;

    if (!id) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            ProductsIdPage id: {id}
        </div>
    );
}

export default ProductsIdPage;
