import axios from 'axios';
const streamAPI = async (req, res)  =>  {
    const { data } = await axios.get(`https://livepeer.com/api/stream/${"9ed36315-72e0-4e12-8fcd-52ff154b671b"}`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            authorization: "Bearer f46408f6-3cf4-4760-9051-fe6710225428"
        },
    });
    res.status(200).json(data);
}
export default streamAPI