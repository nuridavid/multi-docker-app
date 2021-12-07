import React from "react";
import { Link } from "react-router-dom";
function otherPage() {
  return (
    <div>
      hello!
      <Link to="/">go back to home page</Link>
    </div>
  );
}

export default otherPage;
