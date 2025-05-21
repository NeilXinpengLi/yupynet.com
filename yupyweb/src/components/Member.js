import React, { useEffect, useState } from "react";

// 自定义显示名映射表
const displayNameMap = {
  "564167773371236353": "Yoviker",
  "999316935424606238": "KK",
  "960767582988804096": "Natro",
  "287288000298352641": "Potato"
};

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/avatar.json")
      .then(res => res.json())
      .then(data => {
        const memberArr = Object.entries(data).map(([id, info]) => ({
          id,
          name: info.name,
          avatar_url: info.avatar_url
        }));
        setMembers(memberArr);
      });
  }, []);

  return (
    <section className="team">
      {members.map(member => (
        <div className="member" key={member.id}>
          <img
            src={member.avatar_url}
            alt={displayNameMap[member.id] || member.name}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
          <h3>{displayNameMap[member.id] || member.name}</h3>
        </div>
      ))}
    </section>
  );
}

export default MemberList;
