import React from "react";

export default function IndexGIFSection({ gifImage }) {
    if (!gifImage) return null;
    return (
        <section className="gif">
            <div className="content">
            <img
                className="image"
                src={gifImage?.image?.url}
                alt={gifImage?.image?.alt || "Cute GIF"}
                layout="responsive"
            />
            </div>
        </section>
    )
}