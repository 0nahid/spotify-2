import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Home() {
  const [userInfo, setUserInfo] = useState();
  const [userInfoStatus, setUserInfoStatus] = useState("loading");
  const { data: session, status } = useSession();
  // console.log(data, status);
  function getUserInfo() {
    if (status === "loading") {
      return;
    }
    fetch(`/api/users?id=${session?.user?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data?.user);
        setUserInfoStatus("success");
      });
  }
  useEffect(() => {
    getUserInfo();
  }, [status]);

  if (userInfoStatus === "loading") {
    return 'Loading User Info...';
  }
  if (!userInfo?.username) {
    return 'Please update your username';
  }

  return (
    <>
      <h1>Home</h1>
    </>
  )
}
