import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import blogsData from "../data/blog.json"
import { getBlogs, writeBlogs } from "../data/blogs"

const BlogCreate = () => {
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [createdAt, setCreatedAt] = useState(null)
    const [createdBy, setCreatedBy] = useState(null)
    const [text, setText] = useState(null)
    const [shortText, setShortText] = useState(null)
    const [result, setResult] = useState(JSON.stringify(blogsData))

    const [blogs, setBlogs] = useState([])

    const getBlog = async () => {
        let response = await getBlogs()
        response = response.data
        setBlogs(response)
    }
    useEffect(() => {
        getBlog()
    }, [])

    const writeBlog = async (data) => {

        let response = await writeBlogs({
            blogs: JSON.stringify(data)
        })
    }

    const textToHTML = (text) => {
        // Pisahkan teks menjadi paragraf
        const paragraphs = text.split('\n\n');

        // Hasil HTML
        let htmlResult = '';

        // Loop melalui setiap paragraf
        for (const paragraph of paragraphs) {
            // Hapus spasi ekstra di awal dan akhir paragraf
            const trimmedParagraph = paragraph.trim();

            // Tambahkan tag <p>
            if (trimmedParagraph !== '') {
                htmlResult += '<p>';

                // Ganti karakter baris baru dengan tag <br>
                const lines = trimmedParagraph.split('\n');
                htmlResult += lines.join('<br>');

                htmlResult += '</p>';
            }
        }

        return htmlResult;
    }

    const htmlToText = (html) => {

        // Hapus tag <p> dan ganti <br> dengan karakter baris baru
        const text = html.replace(/<\/?p>/g, '').replace(/<br\s*\/?>/g, '\n');

        return text;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let slug = title.replaceAll(' ', '-').toLowerCase()
        let data = blogs.filter((row) => row.slug != slug)

        let add = {
            "title": title,
            "text": textToHTML(text.split('\n').join('<br>')),
            "short_text": textToHTML(shortText.split('\n').join('<br>')),
            "slug": slug,
            "image": image,
            "created_at": createdAt,
            "created_by": createdBy
        }

        setResult(JSON.stringify([
            add,
            ...data
        ]))
        setBlogs([
            add,
            ...data
        ])
        writeBlog([
            add,
            ...data
        ])
    }

    const handleEdit = (slug) => {
        let data = blogs.filter((row) => row.slug == slug)[0]

        setTitle(data.title)
        setImage(data.image)
        setCreatedAt(data.created_at)
        setCreatedBy(data.created_by)
        setText(htmlToText(data.text))
        setShortText(htmlToText(data.short_text))
    }

    const handleDelete = (slug) => {
        let data = blogs.filter((row) => row.slug != slug)
        setResult(JSON.stringify(data))
        setBlogs(data)
        writeBlog(data)
    }

    return (
        <>
            <div className="container mx-auto md:my-20 my-10 md:px-48 px-3 text-white">
                <form onSubmit={handleSubmit}>
                    <div className="md:px-20">
                        <h1 className="md:text-5xl text-3xl font-semibold my-3">BlogCreate</h1>
                        <div className="mb-5">
                            <label htmlFor="work" className="block">Title</label>
                            <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="work" className="block">Image Link</label>
                            <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} required />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="mb-5">
                                <label htmlFor="work" className="block">Created By</label>
                                <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Created By" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="work" className="block">Created At</label>
                                <input type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Created At" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="work" className="email">Short Text</label>
                            <textarea type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Text" onChange={(e) => setShortText(e.target.value)} value={shortText} required></textarea>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="work" className="email">Text</label>
                            <textarea type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Text" onChange={(e) => setText(e.target.value)} value={text} required></textarea>
                        </div>

                        <button className="bg-purple rounded-full px-4 py-2 hover:bg-purple/90 w-full">
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Add
                        </button>
                    </div>
                </form>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-10 gap-3 text-sm">
                    {blogs.map((row, index) => {
                        return (
                            <div key={index} className="bg-dark3 border-dark2 rounded-lg p-4 shadow w-full">
                                <div className="flex mb-3">
                                    <div className="mr-2">
                                        {index + 1}
                                    </div>
                                    <h6>{row.title}</h6>
                                </div>
                                <button onClick={() => handleEdit(row.slug)} className="bg-yellow-500 rounded-full px-4 py-1 mr-1 hover:bg-yellow-500/90 text-xs">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(row.slug)} className="bg-red-500 rounded-full px-4 py-1 mr-1 hover:bg-red-500/90 text-xs">
                                    Delete
                                </button>
                            </div>
                        )
                    })}
                </div>

                <div className="mb-5">
                    <label htmlFor="work" className="email">Paste Text Ini ke Blog.json ya</label>
                    <textarea type="text" className="bg-dark border border-dark2 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full p-2.5 focus:outline-none" placeholder="Result" readOnly required value={result}></textarea>
                </div>
            </div>
        </>
    )
}

export default BlogCreate