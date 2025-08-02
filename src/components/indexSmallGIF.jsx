import React from "react";
import Image from "next/image";

export default function IndexGIFSection({ gifImage }) {
    if (!gifImage) return null;
    return (
        <section className="index-gif-image">
            <Image
                src={gifImage?.image?.url}
                alt={gifImage?.image?.alt || "Cute GIF"}
                width={100}
                height={100}
                layout="responsive"
            />
        </section>
    )
}