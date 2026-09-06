function BlogPostCard({ post, onViewDetails }) {

    return (
        <button
        onClick={() => onViewDetails(post)}
        className="group relative flex flex-col items-center justify-center overflow-hidden border border-slate-200 bg-white p-5 shadow-sm transition  hover:shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
                <span className="">{post.category}</span>
            <h3 className="text-xl font-bold text-blue-700">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>

            <div className="absolute top-4 left-0 bg-blue-600 rounded-r-full text-white px-3">
            <span className="text-xs text-white">{post.date}</span>

            </div>
        </button>
    )
}
export default BlogPostCard;