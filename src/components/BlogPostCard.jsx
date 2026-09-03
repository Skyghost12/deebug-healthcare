function BlogPostCard({ post }) {

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold text-blue-700">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
        </div>
    )
}
export default BlogPostCard;