import type { Platform } from "@/hooks/usePlatform";
import userPlatform from "@/hooks/usePlatform";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = userPlatform();

  if (error?.length > 0) return null;

  return (
    <Menu.Root>
      <Menu.Trigger marginBottom="15px" asChild>
        <Button variant="outline" size="md">
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
          <HiChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                value={platform.slug}
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {" "}
                {platform.name}{" "}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
