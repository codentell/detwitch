import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import Davatar from '@davatar/react';

function Message({ message }) {
    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get("ethAddress")

    return (
        <div>
            {/* <div className={`relative h-8 w-8 ${
          isUserMessage && 'order-last ml-2'
        }`}>
              
          {/* <Avatar username={message.get('username')}/> 
        </div> */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: -15
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ type: 'spring', duration: 1.8 }}
                style={{ marginLeft: "15px", marginRight: "15px", marginTop: "15px", width: "100%"}}

            >
                <div style={{display: "grid",  position: "relative",  gridTemplateColumns: "30px 1fr", padding: "15px", alignItems: "center",  gridGap: "5px", background:  isUserMessage ? "rgb(145, 70, 255)" : "purple", width: "max-content", borderRadius: "60px"}}>
                    <Davatar
                        size={30}
                        address={message.get('ethAddress')}
                        generatedAvatarType='jazzicon' // optional, 'jazzicon' or 'blockies'
                    />
                    <div style={{width: "max-content", overflowWrap: "break-word"}}>{message.get('message')}</div>
                </div>


            </motion.div>
            {/* <p>{message.createdAt}</p> */}
            {/* <TimeAgo 
            datetime={message.createdAt}
            className={`text-[10px] italic text-gray-400 ${
              isUserMessage && "order-first pr-1"
            }`}
          /> */}
          
        </div>
    )
}

export default Message