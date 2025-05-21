import React, { useEffect, useState } from "react";

const OWNER_ID = "624015564532219904"; // 主理人ID

function Header() {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    fetch("/avatar.json")
      .then(res => res.json())
      .then(data => {
        const info = data[OWNER_ID];
        if (info) {
          setOwner(info);
        }
      });
  }, []);

  if (!owner) return null;

  return (
    <header className="header">
      <h1>YUPYNET</h1>
      <img
        src={owner.avatar_url}
        alt={owner.name}
        style={{ width: 150, height: 150, borderRadius: "50%" }}
      />
      <p>{owner.name}</p>
    </header>
  );
}

export default Header;
