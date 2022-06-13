import axios from "axios"

const handler = async (req, res) => {
  const { data } = await axios.get(
    `https://livepeer.com/api/stream/${req.query.id}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`,
      },
    }
  )
  const { isActive, playbackId } = data
  res.status(200).json({ isActive, playbackId })
}

export default handler
