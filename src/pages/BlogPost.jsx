import { blogPosts } from "../data/products";
import BlogPostCard from "../components/BlogPostCard";

function BlogPost() {

    return (
        <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Blog
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Stay up to date with the latest news and updates from our team.
                    </p>
                </div>
                <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                   {blogPosts.map((post) => (
                    <BlogPostCard 
                    key={post.id}
                    post={post}
                    />
                   ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPost