import axios from "axios"

const getBlogs = async () => {
    return await axios.get("https://furi-node.manzcode.com")
        .then((resp) => {

            return resp.data
        })
}

const writeBlogs = async (data) => {
    return await axios.post("https://furi-node.manzcode.com/write", data)
        .then((resp) => {

            return resp.data
        })
}

export {
    getBlogs,
    writeBlogs
}