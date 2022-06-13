import { useState } from "react"
import { useMoralis } from "react-moralis"

function SendMessage({ endOfMessangesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message)
        }
      )

    endOfMessangesRef.current.scrollIntoView({ behavior: "smooth" })
    setMessage("")
  }
  return (
    <form
      style={{
        position: "absolute",
        bottom: "0px",
        background: "#464649",
        display: "grid",
        alignItems: "center",
        gridGap: "15px",
        gridTemplateColumns: "1fr 100px",
        width: "100%",
        borderRadius: "4px",
        height: "100px",
        border: "2px solid transparent",
        resize: "none",
        color: "white",
        caretColor: "white",
      }}
    >
      <input
        type="text"
        value={message}
        style={{
          width: "100%",
          height: "50px",
          marginLeft: "10px",
          borderRadius: "3px",
          border: "3px solid transparent",
          color: "black",
        }}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.get("ethAddress")}...`}
        className=" relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
      />

      <button
        style={{
          marginRight: "10px",
          background: "rgb(145, 70, 255)",
          borderRadius: "3px",
          color: "white",
          fontWeight: "bold",
          height: "50px",
          border: "1px solid transparent",
        }}
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
