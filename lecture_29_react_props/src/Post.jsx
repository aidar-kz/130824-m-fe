function Post({ title, text, img }) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{text}</p>
            <img src={img} />
        </div>
    )
}

export default Post;