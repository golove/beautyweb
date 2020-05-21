import axios from "axios";

function makeAjax(config: object) {



    const newaxios = axios.create({
        baseURL: "http://localhost:9600/",
        method: "post",
        timeout: 5000
    });
    return newaxios(config)


}

export default makeAjax;
