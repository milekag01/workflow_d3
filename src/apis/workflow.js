import axios from "axios";

// server connection
export default axios.create({
    baseURL: "http://localhost:3000",
});
