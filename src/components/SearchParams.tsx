import { useState } from "react";

const SearchParams = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <label>Nome</label>
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
    </>
  );
};

export default SearchParams;
