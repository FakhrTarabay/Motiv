import React from "react";
import Style from "./Messages.module.scss";
import Card from "../General/Card/Card";
import ContactChip from "./ContactChip/ContactChip";
import vCall from "../svg/vCall.svg";
import dots from "../svg/3dots.svg";
import call from "../svg/call.svg";
import Message from "./Message/Message";

const Messages = () => {
  return (
    <div className={Style.MessagesDiv}>
      <Card jusC={"normal"} gap="20px" type="row">
        <Card jusC={"normal"} gap="20px" maxW={"410px"}>
          <div className={Style.title}>Messages</div>
          <div className={Style.messageCol}>
            <ContactChip />
          </div>
        </Card>
        <Card jusC={"space-between"} maxW="700px" gap="17px">
        <div style={{ display: "flex", justifyContent: "space-between",alignItems:"self-end"}}>
              <ContactChip dis="none" />
              <span
                style={{ display: "flex", gap: "10px", padding: "0px 10px" }}
              >
                <button className={Style.btn}>
                  <img src={vCall} alt="vcall"></img>
                </button>{" "}
                <button className={Style.btn}>
                  <img src={call} alt="call"></img>
                </button>{" "}
                <button className={Style.btn}>
                  <img src={dots} alt="dots"></img>
                </button>
              </span>
            </div>
          <div className={Style.messageCol}>
            <Message data={{img:"sadas",text:"Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="rec"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
            
            <Message data={{img:"sadas",text:"yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",time:"2:30"}} type="sent"/>
          </div>
          <input className={Style.msgInput}></input>
        </Card>
      </Card>
    </div>
  );
};

export default Messages;
