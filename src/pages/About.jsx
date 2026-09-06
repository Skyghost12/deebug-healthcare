import { Code2, Server, Palette, GraduationCap, HeartPulse, Mail, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import doom from "../assets/doom.webp";

function About() {
    return (
        <>
            <main className="min-h-screen bg-slate-50 text-slate-900">
                <section className="relative overflow-hidden text-white flex justify-center ">
                    <img src={doom} alt="" className="h-180 w-full object-cover" />
                    <div className="absolute inset-0 bg-black/80 "></div>

                    <div className="absolute top-30 mx-auto max-w-5xl px-6 py-20 text-center">
                        <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white/30 bg-white/10 shadow-2xl">
                            <img
                                src={doom}
                                alt="Sky"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                            About the Developer
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Meet <span className="text-cyan-200">Sky</span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                            A Full-Stack Developer student at Deebug Institute
                            passionate about creating modern, practical, and user-friendly
                            digital experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href="#project"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                            >
                                About This Project
                                <ArrowUpRight className="w-4 h-4" />
                            </a>

                            <a
                                href="mailto:your@email.com"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-4xl px-6 py-16">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                                <GraduationCap className="w-4 h-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-blue-600">
                                    My Journey
                                </p>
                                <h2 className="text-2xl font-bold">
                                    Learning by Building
                                </h2>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-600">
                            I enjoy turning ideas into functional web applications and
                            continuously improving my skills through real-world projects.
                            My development journey started with the fundamentals of web
                            development and has grown into working with modern technologies
                            such as React, JavaScript, Tailwind CSS, Node.js, Express, and
                            MongoDB.
                        </p>

                        <p className="mt-5 leading-7 text-slate-600">
                            I believe the best way to learn development is by building,
                            experimenting, solving problems, and continuously improving.
                        </p>
                    </div>
                </section>

                {/* What I Do */}
                <section className="mx-auto max-w-6xl px-6 pb-16">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Skills & Focus
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            What I Do
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-slate-500">
                            I enjoy working across different areas of web development to
                            turn ideas into useful digital experiences.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                <Code2 className="w-4 h-4" />
                            </div>

                            <h3 className="text-xl font-bold">
                                Frontend Development
                            </h3>

                            <p className="mt-3 leading-6 text-slate-600">
                                I create responsive and interactive user interfaces using
                                React, JavaScript, Tailwind CSS, and modern web technologies.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                                <Server className="w-4 h-4" />
                            </div>

                            <h3 className="text-xl font-bold">
                                Backend Development
                            </h3>

                            <p className="mt-3 leading-6 text-slate-600">
                                I build APIs and server-side applications using Node.js,
                                Express, MongoDB, and related backend technologies.
                            </p>
                        </div>

                        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                                <Palette className="w-4 h-4" />
                            </div>

                            <h3 className="text-xl font-bold">
                                UI & User Experience
                            </h3>

                            <p className="mt-3 leading-6 text-slate-600">
                                I focus on creating clean, accessible, responsive, and
                                user-friendly interfaces that make technology easier to use.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="bg-white border-y border-slate-200">
                    <div className="mx-auto max-w-5xl px-6 py-16 text-center">

                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Technologies
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            Tools I Work With
                        </h2>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "Git",
                                "GitHub",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project */}
                <section
                    id="project"
                    className="mx-auto max-w-5xl px-6 py-16"
                >
                    <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 to-indigo-50 p-8 sm:p-10">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                            <HeartPulse className="w-4 h-4" />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Final Assessment
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            About This HealthTech Project
                        </h2>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                            This HealthTech platform was developed as part of my final
                            assessment as a frontend developer in Deebug institute. The project demonstrates how technology can make
                            healthcare services more convenient and accessible through a
                            simple and modern digital platform.
                        </p>

                        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                            Users can explore healthcare professionals, check doctor
                            availability, book appointments, and browse healthcare products
                            and medical equipment.
                        </p>

                        <div className="mt-8 rounded-2xl bg-white/80 p-6">
                            <p className="text-lg font-semibold text-slate-800">
                                “Learn. Build. Improve. Repeat.”
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                My approach to becoming a better developer.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Social */}
                <section className="px-6 pb-20 text-center">

                </section>

            </main>

            <Footer />
        </>
    );
}

export default About;