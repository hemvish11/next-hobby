import { useState } from "react";
import SignInMobile from "./SignInMobile";
import JoinInMobile from "./JoinInMobile";

function MobileSignJoin({ signInOut, hamburgerClicked }) {
    const [signInActive, setSignInActive] = useState(true);
    const [joinInActive, setJoinInActive] = useState(false);


    return (
        <div className="mt-8 w-[88%]">
            <div className='flex gap-10 items-center justify-center lg:items-start lg:justify-start mt-5 text-[16px] lg:text-xl font-bold '

            >
                <span className={`${signInActive ? " text-custom-color hover:text-[#9845ff]" : "text-gray-color hover:text-[#9845ff]"} cursor-pointer`}

                    onClick={() => {
                        setJoinInActive(false);
                        setSignInActive(true);

                    }}>
                    Sign In
                </span>
                <span className={`${!signInActive ? " text-custom-color hover:text-[#9845ff]" : "text-gray-color hover:text-[#9845ff]"} cursor-pointer`}

                    onClick={() => {
                        setJoinInActive(true);
                        setSignInActive(false);
                    }}>
                    Join In
                </span>

            </div>

            <div className='my-4'>
                {signInActive ? <SignInMobile signInOut={signInOut} /> : <JoinInMobile signInOut={signInOut} hamburgerClicked={hamburgerClicked} />}
            </div>
        </div>
    )
}

export default MobileSignJoin