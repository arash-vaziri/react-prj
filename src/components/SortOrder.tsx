import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  onSortBy: (ordering: string) => void;
  selectedOrder: string;
}

const SortOrder = ({ onSortBy, selectedOrder }: Props) => {
  /*
    name, 
    released, 
    added, 
    rating, 
    metacritic.
    */
  const orderSet = [
    { value: "", title: "Relevance" },
    { value: "name", title: "Name" },
    { value: "-released", title: "Release Date" },
    { value: "-added", title: "Added Date" },
    { value: "-rating", title: "Rating" },
    { value: "metacritic", title: "Score" },
  ];

  const currentOrder = orderSet.find((order) => order.value == selectedOrder);

  return (
    <Menu.Root>
      <Menu.Trigger marginBottom="15px" asChild>
        <Button variant="outline" size="md">
          Sort by : {currentOrder?.title || "Relevence"}
          <HiChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {orderSet.map((order) => (
              <Menu.Item
                value={order.value}
                key={order.value}
                onClick={() => onSortBy(order.value)}
              >
                {order.title}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortOrder;
