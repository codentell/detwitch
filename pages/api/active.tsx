import axios from 'axios';

const streamAPI = async (req, res)  =>  {
    const { data } = await axios.get(`https://livepeer.com/api/stream/${"9ed36315-72e0-4e12-8fcd-52ff154b671b"}`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`
        },
    });
    res.status(200).json(data);
}
export default streamAPI