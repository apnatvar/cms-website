import React from "react";
import Image from "next/image";

export default function IndexQuoteImageSection({ quoteImage }) {
    if (!quoteImage) return null;
    return (
        <section className="index-quote-image">
            <Image
                src={quoteImage.src}
                alt={quoteImage.alt || "Quote"}
                layout="responsive"
                width={100}
                height={100}
            />
        </section>
    )
}