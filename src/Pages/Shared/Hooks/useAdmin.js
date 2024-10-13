import { useEffect, useState } from "react";

function useAdmin(email) {
  const [isAdmin, setIsAdmin] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://manufacturer-website-server-side-y96m.vercel.app/users/admin/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, isAdminLoading];
}

export default useAdmin;
