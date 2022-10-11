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
import { useSelector,useDispatch } from "react-redux";
import { setMsgs } from "../../Store/userStateSlice";
const Messages = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.userData.contacts);
  const msgs = useSelector((state) => state.userData.Msgs);
  const [data, setData] = useState(contacts[0])
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    var objDiv = document.getElementById("test");
    objDiv.scrollTop = objDiv.scrollHeight;
  });



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
      to: data.name
    };
    dispatch(setMsgs(t));
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
                return <ContactChip setData={setData} data={contact} key={index} />;
              } else if (
                contact.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return <ContactChip setData={setData} data={contact} key={index} />;
              }
              return <div key={index}></div>;
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
              data={data}
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
              if (elem.sender === data.name || elem.to === data.name) {
                return <Message key={index} data={elem} />;
              }
              return <div key={index}></div>
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
