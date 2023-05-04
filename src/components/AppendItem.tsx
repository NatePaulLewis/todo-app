import { ScaleFade, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AddItemButton from "./AddItemButton";
import InputBox from "./InputBox";
import TaskItem from "./TaskItem";
import { createItem } from "./createItem";
// import { deleteItem } from "./deleteItem";

export default function AppendItem() {
  const [todos, setTodos] = useState(createItem);
  const [text, setText] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  // const [deleteTodos, setDeleteTodos] = useState(deleteItem);

  // const handleDelete = (event: React.MouseEventHandler<HTMLInputElement>) => {
  //   if (event.key === "onclick") {
  //     setDeleteTodos([
  //       {
  //         id: todos.length,
  //         text: text,
  //       },
  //       ...todos,
  //     ]);
  //     setText("");
  //   }
  // };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTodos([
        {
          id: todos.length,
          text: text,
        },
        ...todos,
      ]);
      setText("");
    }
  };

  return (
    <>
      {AddItemButton(onToggle)}
      <ScaleFade initialScale={0.9} in={isOpen}>
        {InputBox(text, setText, handleEnter)}
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={isOpen || todos.length > 0}>
        {TaskItem(todos)}
      </ScaleFade>
    </>
  );
}
