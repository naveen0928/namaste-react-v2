import { useEffect } from "react";

const UserFunctional = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log("functional interval");
    }, 1000);

    // unmounts the timer when we move from About to some other page
    return () => {
      // console.log("functional unmount");
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>UserFunctional</h1>
    </div>
  );
};

export default UserFunctional;
