import { faDiscord, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import useWindowSize from "@/hooks/useWindowSize"
import useGetUser from "@/hooks/useGetUser";

import HeaderItem from "./HeaderItem";
import HeaderContainer from "./HeaderContainer";
import HeaderText from "./HeaderText";
import Loading from "../Loading";

export default function Header() {
  const windowSize = useWindowSize();
  const { user, loading } = useGetUser();

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <main className="absolute font-space-grotesk">
        <HeaderContainer className="w-screen h-24 border-b-[1px] border-gray-900 text-gray-600">
          <HeaderItem items={3} className="justify-center">
            {windowSize.width! >= 650 ?
              <img src="/radio.png" width="200" className="cursor-pointer" onClick={() => window.location.href = window.location.origin} />
              :
              <img src="/r.png" width="60" className="cursor-pointer" onClick={() => window.location.href = window.location.origin} />
            }
          </HeaderItem>
          <HeaderItem items={3} className="justify-center border-l-[1px] border-gray-900">
            <div className={"flex" + (windowSize.width! >= 600 ? "" : "flex-col text-center")}>
              <HeaderText className="p-2" url={window.location.origin}>HOME</HeaderText>
              <HeaderText className="p-2" url={`${window.location.origin}/guilds`}>SERVERS</HeaderText>
            </div>
          </HeaderItem>
          <HeaderItem items={3} className="justify-between">
            {windowSize.width! >= 600 ?
              <HeaderItem items={2} className="justify-center p-5 border-l-[1px] border-gray-900">
                <FontAwesomeIcon icon={faGithubSquare} className="p-1 cursor-pointer text-white hover:text-violet-400" onClick={() => {
                  window.location.href = "https://github.com/toadless/radio"
                }} />
                <FontAwesomeIcon icon={faDiscord} className="p-1 cursor-pointer text-white hover:text-violet-400" onClick={() => {
                  window.location.href = "https://radio-api.toadless.net/invite"
                }} />
                <FontAwesomeIcon icon={faGlobe} className="p-1 cursor-pointer text-white hover:text-violet-400" onClick={() => {
                  window.location.href = "https://toadless.net"
                }} />
              </HeaderItem>
              : null}

            <HeaderItem items={2} className="justify-center border-l-[1px] w-[100%] border-gray-900">
              {user == null ?
                <HeaderText url={`${process.env.NEXT_PUBLIC_API_URL}/auth/authorize`}>LOGIN</HeaderText>
                :
                <HeaderItem items={1} className="justify-between">
                  <img src={user.avatar} width={60} className="rounded-full cursor-pointer p-2" onClick={() => {
                    window.location.href = window.location.origin + "/guilds"
                  }} />

                  <FontAwesomeIcon icon={faRightFromBracket} className="p-1 cursor-pointer text-gray-600 hover:text-violet-400" onClick={() => {
                    localStorage.clear();
                    window.location.href = window.location.origin
                  }} />
                </HeaderItem>
              }
            </HeaderItem>
          </HeaderItem>
        </HeaderContainer>
      </main>
    </>
  )
}