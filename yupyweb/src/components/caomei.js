import React, { useEffect, useState } from 'react';
import './caomei.css'; // 引入同级目录下的 CSS 文件

const Caomei = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  // 自定义的映射名称
  const customNickname = '草莓'; // 这里可以随意修改为你想要的名字

  useEffect(() => {
    fetch('/avatars.json')
      .then((response) => response.json())
      .then((data) => {
        // 只提取头像 URL 信息
        const avatar = data['624015564532219904']?.avatar_url;
        setAvatarUrl(avatar);
      });
  }, []);

  return (
    avatarUrl && (
      <div className="container">
        <div className="card">
          <div className="avatar-wrapper">
            <img
              src={avatarUrl} // 使用提取的头像 URL
              alt={customNickname} // 昵称使用自定义映射
              className="avatar" // 添加 CSS 类名
              draggable="false" // 禁止图片拖拽
            />
          </div>
          <div className="nickname">{customNickname}</div>
        </div>
      </div>
    )
  );
};

export default Caomei;
