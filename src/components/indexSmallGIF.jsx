export default function IndexGIFSection({ gifImage }) {
    if (!gifImage) return null;
    return (
        <section className="index-gif-image">
            <Image
                src={gifImage.src}
                alt={gifImage.alt || "Cute GIF"}
                layout="responsive"
                width={100}
                height={100}
            />
        </section>
    )
}