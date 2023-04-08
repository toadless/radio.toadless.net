import { faDiscord, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import useWindowSize from "@/hooks/useWindowSize"

import HeaderItem from "./HeaderItem";
import HeaderContainer from "./HeaderContainer";
import HeaderText from "./HeaderText";

export default function Header() {
  const windowSize = useWindowSize();

  return (
    <>
      <main className="absolute font-space-grotesk">
        <HeaderContainer className="w-screen h-24 border-b-[1px] border-gray-900">
          <HeaderItem items={3} className="justify-center">
            {windowSize.width! >= 650 ?
              <img src="/radio.png" width="200" />
              :
              <img src="/r.png" width="60" />
            }
          </HeaderItem>
          <HeaderItem items={3} className="justify-center border-l-[1px] border-gray-900">
            <div className={"flex" + (windowSize.width! >= 600 ? "" : "flex-col text-center")}>
              <HeaderText className="p-2">HOME</HeaderText>
              <HeaderText className="p-2">SERVERS</HeaderText>
            </div>
          </HeaderItem>
          <HeaderItem items={3} className="justify-between">
            {windowSize.width! >= 600 ?
              <HeaderItem items={2} className="justify-center p-5 border-l-[1px] border-gray-900">
                <FontAwesomeIcon icon={faGithubSquare} className="p-1 cursor-pointer hover:text-violet-400" />
                <FontAwesomeIcon icon={faDiscord} className="p-1 cursor-pointer hover:text-violet-400" />
                <FontAwesomeIcon icon={faGlobe} className="p-1 cursor-pointer hover:text-violet-400" />
              </HeaderItem>
              : null}

            <HeaderItem items={2} className="justify-center border-l-[1px] w-[100%] border-gray-900">
              <HeaderText>LOGIN</HeaderText>
            </HeaderItem>
          </HeaderItem>
        </HeaderContainer>
      </main>
    </>
  )
}