import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaAndroid,
  FaXbox,
  FaApple,
  FaPlaystation,
  FaLinux,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega, SiGnome } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        //<-- if (!IconMap[platform.slug]) console.log("failur >", platform.slug);

        return (
          <Icon
            as={IconMap[platform.slug] || SiGnome}
            color="gray.500"
            key={platform.id}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
