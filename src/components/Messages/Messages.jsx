import React, { useState, useEffect } from "react";
import Style from "./Messages.module.scss";
import Card from "../General/Card/Card";
import ContactChip from "./ContactChip/ContactChip";
import vCall from "../svg/vCall.svg";
import dots from "../svg/3dots.svg";
import call from "../svg/call.svg";
import Message from "./Message/Message";
import send from "../svg/send.svg";
import attach from "../svg/attach.svg";

const Messages = () => {
  const contacts = [
    {
      img: "o",
      name: "Omar Khas",
      status: "Online",
      time: "4:30",
      notif: "3",
    },
    {
      img: "s",
      name: "Shaza",
      status: "Online",
      time: "8:30",
      notif: "1",
    },
  ];
  useEffect(() => {
    var objDiv = document.getElementById("test");
    objDiv.scrollTop = objDiv.scrollHeight;
  });

  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");
  const [msgs, setMsgs] = useState([
    {
      img: "sadas",
      text: "yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",
      time: "2:30",
      type: "sent",
    },
    {
      img: "s",
      text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice",
      time: "2:30",
      type: "rec",
    },
  ]);

  function handleSend() {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let t = {
      img: "s",
      text: msg,
      time: time.substring(1),
      type: "sent",
    };

    setMsgs((prev) => [...prev, t]);
    setMsg("");
  }

  return (
    <div className={Style.MessagesDiv}>
      <Card jusC={"normal"} gap="20px" type="row">
        <Card jusC={"normal"} gap="20px" maxW={"410px"} bShadow="none">
          <div className={Style.title}>Messages</div>
          <input
            className={Style.msgInput}
            type={"text"}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <div className={Style.messageCol} style={{ maxHeight: "350px" }}>
            {contacts.map((contact, index) => {
              if (search === "") {
                return <ContactChip data={contact} key={index}/>;
              } else if (
                contact.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return <ContactChip data={contact} key={index}/>;
              }
              return <div></div>;
            })}
          </div>
        </Card>
        <Card jusC={"space-between"} maxW="700px" gap="17px" bShadow="none">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "self-end",
            }}
          >
            <ContactChip
              data={{
                img: "s",
                name: "Shaza",
                status: "Online",
                time: "8:30",
                notif: "1",
              }}
              dis="none"
            />
            <span style={{ display: "flex", gap: "10px", padding: "0px 10px" }}>
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
          <div className={Style.messageCol} id="test">
            {msgs.map((elem, index) => {
              return <Message key={index} data={elem} />;
            })}
          </div>
          <div className={Style.msgInputB}>
            <button className={Style.sendBtn} onClick={() => handleSend()}>
              <img alt="ico" src={attach} />
            </button>
            <input
              className={Style.msgInput}
              type={"text"}
              placeholder="type"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></input>
            <button className={Style.sendBtn} onClick={() => handleSend()}>
              <img alt="ico" src={send} />
            </button>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default Messages;
