import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  platforms: Platform[];
}

function PlatformListIcon({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    andriod: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => {
        return <Icon key={platform.slug} as={iconMap[platform.slug]}></Icon>;
      })}
    </HStack>
  );
}

export default PlatformListIcon;
