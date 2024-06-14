import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Help from "./help";

const Item = ({
  index,
  text,
  help,
  firstName,
  lastName,
  phone,
  updateCounter,
}: {
  index: number,
  text: string,
  help: string,
  firstName: string,
  lastName: string,
  phone: string,
  updateCounter: (completed: boolean) => void,
}) => {
  const [ message, setMessage ] = useState(text);
  const [ state, setState ] = useState(false);
  const [ progress, setProgress ] = useState('Не выполнено');
  const [ style, setStyle ] = useState('py-4 px-4 flex justify-between bg-orange-200 rounded-lg border-2 border-red-800');

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    if (state === false) {
      setProgress('Не выполнено');
      setStyle('py-4 px-4 flex justify-between bg-orange-200 rounded-lg border-2 border-red-500');
      updateCounter(state);
    } else {
      setProgress('Выполнено');
      setStyle('py-4 px-4 flex justify-between bg-orange-200 rounded-lg border-2 border-emerald-500');
      updateCounter(state);
    }
  }, [state]);  

  return (
    <>
    <div className={style}>
      <p className="w-[800px] self-center">{message}</p>
      <div className="flex justify-between space-x-5">
        <div className="flex space-x-3">  
          <p className="self-center" >Подсказка</p>
          <Button className="text-red-500 border-2 pl-2 pr-2 rounded-full border-red-500 hover:cursor-pointer self-center" onPress={onOpen}>?</Button>
        </div>          
        <div className="w-[140px] flex justify-between">
          <p className="self-center">{progress}</p>
          <input type="checkbox" className="w-4 h-4 self-center hover:cursor-pointer" onClick={() => {setState(!state)}}/>
        </div>
      </div>
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-orange-200 w-[600px] left-[38%] top-[20%] absolute text-black rounded-md border-2 border-orange-400 outline-none">
      <ModalContent className="px-5 pt-5 pb-1 flex flex-col">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col items-center gap-1 pt-8 font-bold text-center text-lg">{message}</ModalHeader>
            <ModalBody className="pb-12">
              {/* index={index} firstName={firstName} lastName={lastName} phone={phone} */}
              <Help index={index} firstName={firstName} lastName={lastName} phone={phone} onClose={onClose}/>
            </ModalBody>
            <ModalFooter className="flex justify-end">
              <Button onPress={onClose} className="px-3 py-2 border-2 border-orange-400 rounded-md">
                Закрыть
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
    
    </>
  );
};

export default Item;