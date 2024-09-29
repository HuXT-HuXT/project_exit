'use client';

import { useEffect, useState } from "react";

import { dataForElement } from "../(constants)/const";
import Item from "../(components)/item";
import Header from "../(components)/header";
import Footer from "../(components)/footer";

const MainPage = () => {
  const [ history, setHistory ] = useState<boolean>(false);
  const [ equipment, setEquipment ] = useState<boolean>(false);
  const [ count, setCount ] = useState<number>(0);
  const [ progress, setProgress ] = useState<boolean>(false);
  const [ firstName, setFirstName ] = useState<string>('');
  const [ lastName, setLastName ] = useState<string>('');
  const [ phone, setPhone ] = useState<string>('');
  const [ notebook, setNotebook ] = useState<string>('');
  const [ monitor, setMonitor ] = useState<string>('');
  const [ imei, setImei ] = useState<string>('');
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);

  useEffect(() => {
    if(count === 0) {
      setProgress(false);
    } else {
      setProgress(true);
    }
  }, [count]);

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);        
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })


  const turnOnHistory = () => {
    setHistory(!history)
  };

  const turnOnEquipment = () => {
    setEquipment(!equipment)
  };

  const updateCounter = (completed: boolean) => {
    if (completed) {
      setCount(count-1);
    } else {
      setCount(count+1);
    }
  };  

  return (
    <>
      <Header firstName={firstName} lastName={lastName} isTopOfPage={isTopOfPage}/>
      <main className="max-w-6xl m-auto bg-white text-black p-4 flex-col space-y-4">
        {progress && (
          <div className="flex-col py-4 px-4 bg-orange-200 rounded-lg">
            <p className="text-center text-lg">Выполнено шагов {count} из {dataForElement.length}</p>
          </div>
        )}
        {!progress && (
          <div className="flex space-x-5 py-4 px-4 bg-orange-200 rounded-lg">
            <div className="flex space-x-3">
              <p className="self-center">Сохранить данные сотрудника</p>
              <div onClick={turnOnHistory} className="w-10 bg-emerald-500 hover:cursor-pointer text-center text-lg rounded-md">{history ? '-' : '+'}</div>
            </div>
            <div className="flex space-x-3">
              <p className="self-center">Сохранить информацию об оборудовании</p>
              <div onClick={turnOnEquipment} className="w-10 bg-emerald-500 hover:cursor-pointer text-center text-lg rounded-md">{equipment ? '-' : '+'}</div>
            </div>
          </div>
        )}
        {(history && !progress) && (
          <div className="flex-col py-4 px-4 bg-orange-200 rounded-lg">
            <p className="text-lg pb-3 text-center">Введите данные о сотруднике</p>
            <div className="flex justify-between pb-5">
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">Имя</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
              </div>
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">Фамилия</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
              </div>
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">Номер телефона</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
              </div>
            </div>
          </div>
        )}
        {(equipment && !progress) && (
          <div className="flex-col py-4 px-4 bg-orange-200 rounded-lg">
            <p className="text-lg pt-5 pb-3 text-center">Проверьте оборудование в IT Inventory Tool</p>
            <div className="flex justify-between pb-5">
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">S/N ноутбука</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={notebook} onChange={(e) => {setNotebook(e.target.value)}}/>
              </div>
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">S/N монитора(ов)</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={monitor} onChange={(e) => {setMonitor(e.target.value)}}/>
              </div>
              <div className="flex-col space-y-2">
                <p className="w-60 text-center">IMEI телефона</p>
                <input type="text" className="w-60 border-2 border-gray-500" value={imei} onChange={(e) => {setImei(e.target.value)}}/>
              </div>
            </div>
            <p>Если какого-то типа оборудования сдаётся больше одной единицы, то серийные номера нужно вводить через запятую.</p>
          </div>
        )}
        {((history || equipment) && !progress) && (
          <button className="w-full py-2 px-3 text-center bg-emerald-600">Проследуем на выход</button>
        )}
        {dataForElement.map((element, i) => (        
          <Item key={i} index={i} text={element.text} help={element.help} updateCounter={updateCounter} firstName={firstName} lastName={lastName} phone={phone}></Item>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;