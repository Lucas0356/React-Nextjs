'use client'

export default function Error() {
    return (
        <article>
            <p>No se han encontrados posts</p>
            <Image
                src='https://http.cat/images/404.jpg'
                alt='error 404 not found image cat'
                width={300}
                height={200}
            />
        </article>
    )
}