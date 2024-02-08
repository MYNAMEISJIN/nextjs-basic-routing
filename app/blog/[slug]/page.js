const BlogPostPage =(props)=>{

    console.log(props)
    return (
        <main>
            <h1>
                Blog post
            </h1>
            <div>
            {props.params.slug}
            </div>
        </main>
    )
}

export default BlogPostPage;