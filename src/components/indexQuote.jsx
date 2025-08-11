import React from "react";

export default function IndexQuoteImageSection({ quoteImage }) {
    if (!quoteImage) return null;
    return (
        <section className="qoute">
            <div className="content">
            <img
                className="image"
                src={quoteImage?.image?.url}
                alt={quoteImage?.image?.alt || "Quote"}
                layout="responsive"
            />
            </div>
        </section>
    )
}