import React, { useEffect, useState } from 'react';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // 从 public/avatars.json 获取数据
    fetch('/avatars.json')
      .then((response) => response.json())
      .then((data) => {
        // 筛选出 ID 不为 624015564532219904 的成员
        const filteredMembers = Object.entries(data)
          .filter(([id]) => id !== '624015564532219904') // 排除指定 ID
          .map(([id, member]) => ({
            id,
            name: member.name || `用户${id}`, // 使用名字或默认
            avatar: member.avatar_url, // 获取头像 URL
          }));
        setMembers(filteredMembers);
      });
  }, []);

  return (
    <div className="members-container">
      {members.map((member) => (
        <div
          key={member.id}
          className="member-card"
          onMouseDown={(e) => e.preventDefault()} // 禁用鼠标点击时的默认行为
        >
          <div className="member-avatar-wrapper">
            <img
              src={member.avatar}
              alt={member.name}
              className="member-avatar"
              draggable="false" // 禁止头像拖动
            />
          </div>
          <div className="member-name">{member.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Members;
