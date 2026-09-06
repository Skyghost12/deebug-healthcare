import { blogPosts } from "../data/products";

function BlogPostDetails({ post, onClose}) {

    return (
        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <section className="relative flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-6 shadow-xl md:flex-row">

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl text-slate-500 hover:text-slate-900"
                >
                    ✕
                </button>

                <div className="shrink-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="h-80 w-full rounded-xl object-cover md:w-80"
                    />
                </div>

                <div className="mt-2 flex flex-col">

                    <span className="w-fit rounded-full border border-slate-400 bg-slate-300 px-2 py-1 text-center text-xs">
                        {post.category}
                    </span>

                    <h1 className="mt-3 text-xl font-bold text-blue-700">
                        {post.title}
                        <span className="text-sm font-normal tracking-tight text-slate-500">
                            {" "}({post.excerpt})
                        </span>
                    </h1>

                    <p className="mt-2 text-slate-900 font-semibold">
                        {post.content}
                    </p>


                    <p className="mt-1 text-sm text-slate-500 font-bold">
                        By: {post.author}
                    </p>

        

                </div>
            </section>
        </div>
    
    )
}

export default BlogPostDetails