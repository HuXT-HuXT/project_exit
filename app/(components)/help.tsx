// &#10;&#13;

const Help = ({
  index,
  firstName,
  lastName,
  phone,
  onClose
}: {
  index: number,
  firstName: string,
  lastName: string,
  phone: string,
  onClose: () => void,
}) => {
  let linkPhoneAdmin = 'https://vgr-intranet.rumsk.vw.vwg/mphones/admin/telephones/matching';
  let fName = 'Имя';
  let lName = 'Фамилия';
  let pNumber = '+7 925 503 xxxx'

  if (firstName !== '') {
    fName = firstName;
  }

  if (lastName !== '') {
    lName = lastName;
    linkPhoneAdmin = 'https://vgr-intranet.rumsk.vw.vwg/mphones/admin/telephones/matching?inner=false&inner=true&filter=' + lastName;
  }

  if (phone !== '') {
    pNumber = phone;
  }

  const fullName = fName + ' ' + lName;
  
  const emailBody = 'Добрый день, Александра,' + ' Сотрудник ' + fullName + ' сдал оборудование - состояние хорошее.';
  const mailtoHref = 'mailto:Aleksandra.Veselova@agr.auto?subject=' + fullName + '/ увольнение' + '&cc=Extern.Konstantin.Suvorov@agr.auto&body=' + emailBody;
  
  const emailBodyIssue = 'Добрый день, коллеги,' + ' Сотрудник ' + fullName + ' повредил/ потерял оборудование. Акт и фото во вложении.';
  const mailAboutIssue = 'mailto:Maria.Novinkova@agr.auto, Olga.Safronova@agr.auto?subject=' + fullName + '/ увольнение' + '&cc=Extern.Konstantin.Suvorov@agr.auto&body=' + emailBodyIssue;

  const emailBodyToMegafon = 'Добрый день, Просьба заблокировать и удалить персональные данные номеров: ' + pNumber + '. Кодовое слово – Лето / LETO.';
  const mailToMegafon = 'mailto:top@Megafon.ru?subject=' + pNumber + '&cc=stanislav.v.sotnik@megafon.ru&body=' + emailBodyToMegafon;

  if (index === 0) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>После изъятия оборудования необходиимо отправить письмо в HR.</p>
        <div className="flex justify-between">
          <p className="w-[400px]">- Если с оборудованием всё в порядке то только Aleksandra.Veselova@agr.auto</p>
          <a href={mailtoHref} className="w-[150px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Отправить письмо</a>
        </div>
        <div className="flex justify-between">
          <p className="w-[400px]">- В случае проблем с оборудованием (повреждено, утеряно) составляется акт, который отправляется с фотографиями поверждённого оборудования уже Maria.Novinkova@agr.auto, Olga.Safronova@agr.auto.</p>
          <a href={mailAboutIssue} className="w-[150px] bg-red-300 border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Отправить письмо</a>
        </div>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>На портале IT Inventory Tool необходимо списать оборудование с сотрудника на себя.</p>
        <a href="https://vgr-intranet.rumsk.vw.vwg/equipment" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 2) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>Каждый компьютер должен храниться месяц в карантине.</p>
        <p>Необходимо наклеить на компьютер стикер с именем компьютера, фамилией и именем сотрудника, датой окончания карантина.</p>
        <p>На телефон необходимо наклеить его IMEI для упрощения периодических инвентаризаций.</p>
      </div>
    )    
  }

  if (index === 3) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>Необходимо отправить письмо в Мегафон для блокировки номера и удалении персональных данных сотрудника. Перед отправкой найти все активированные на сотрудника номера телефонов на портале Мегафон.</p>
        <p>Письмо нужно отправлять от имени <span className="font-bold">VRMO R: MSK, Mobile Telephony.</span></p>
        <a href={mailToMegafon} className="w-[150px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Отправить письмо</a>
      </div>
    )
  }

  if (index === 4) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>На портале PhoneAdmin в разделе сопоставления удалить привязку номера к сотруднику.</p>
        <a href={linkPhoneAdmin} target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }
  if (index === 5) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>В файле <span className="font-bold">Numb_Plan_New2.xlsx</span> необходимо найти номер телефона и удалить ФИО сотрудника из соответствующего поля.</p>
        <div>
          <p>Файл находится на сетевом диске:</p>
          <p className="font-bold">\\vwrmmovmo097\sysshares\IT_Service_Desk\Стац.Телеф</p>
        </div>
        <p className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center hover:cursor-pointer" onClick={() => {onClose(); navigator.clipboard.writeText("\\" + "\\vwrmmovmo097\\sysshares\\IT_Service_Desk\\Стац.Телеф")}}>Скопировать путь</p>
      </div>
    )
  }

  if (index === 6) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>После входа на панель админки переходим на вкладку «пользователи»</p>
        <p>В фильтре производим поиск по фамилии (латиницей), нажимаем крест в правой части экрана</p>
        <img src="./servicenet.png" alt="servicenet" className="w-[560px]"/>
        <a href="https://servicenet.vw-group.ru/admin/" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 7) {
    return (
      <div className="flex space-y-4 flex-col">
        <p className="font-bold">Если в системе ServiceNet не было найдено учётной записи сотрудника, этот шаг можно пропустить.</p>
        <p>Выбираем вкладку <span className="font-bold">Администрирование</span>, далее <span className="font-bold">Настройка пользователей</span></p>
        <img src="./servicebook1.jpg" alt="servicebook"  className="w-[400px]"/>
        <p>Вводим логин пользователя из SeviceNet (Цифра 1).</p>
        <p>Нажимаем на иконку корзины (Цифра 2).</p>
        <img src="./servicebook2.jpg" alt="servicebook"  className="w-[560px]"/>
        <a href="https://servicebook.rumsk.vw.vwg/login.xhtml" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 8) {
    return (
      <div className="flex space-y-4 flex-col">
         <p className="font-bold">Если в системе ServiceNet не было найдено учётной записи сотрудника, этот шаг можно пропустить.</p>
        <p>Выбираем вкладку <span className="font-bold">Импорт пользователя</span></p>
        <img src="./servicereport1.jpg" alt="servicebook"  className="w-[400px]"/>
        <p>Вводим логин пользователя из SeviceNet (Цифра 1).</p>
        <p>Нажимаем на иконку корзины (Цифра 2).</p>
        <img src="./servicereport2.jpg" alt="servicebook"  className="w-[560px]"/>
        <a href="https://servicereport.rumsk.vw.vwg/login.xhtml" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 9) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>Во вкладке Device & Users нужно найти сотрудника по фамилии, выбрать устройства закреплённые за ним.</p>
        <p>В выпадающем меню Actions выбрать пункт Retire.</p>
        <p>В открывшемся меню выбрать опцию Force Retire и подтвердить удаление, нажав Retire.</p>
        <img src="./mdm.png" alt="mdm" className="w-[560px]"/>
        <a href="https://mimgmt.vwgroup.ru/mifs/login.jsp" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 10) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>10</p>
      </div>
    )
  }

  if (index === 11) {
    return (
      <div className="flex space-y-4 flex-col">
        <p>Выбрать вкладку <span className="font-bold">Пользователи</span>.</p>
        <img src="./disa1.jpg" alt="disa" className="w-[560px]"/>
        <p>Находим учётную запись пользователя, нажимаем на значок корзины напротив его УЗ.</p>
        <img src="./disa2.jpg" alt="disa" className="w-[560px]"/>
        <a href="https://disa-imw/disa-imw-admin/login.xhtml" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }

  if (index === 12) {
    return (
      <div className="flex space-y-4 flex-col">        
        <p>Перейти во вкладку Профили - Физические лица.</p>
        <img src="./hldna1.png" alt="HLDNA" className="w-[300px]" />
        <p>Hайти сотрудника по фамилии/ user ID и удалить все назначенные роли.</p>
        <img src="./hldna2.png" alt="HLDNA" className="w-[560px]"/>
        <p>Необходимо прокликать каждую роль и выставить дату отключения.</p>
        <img src="./hldna3.jpg" alt="HLDNA" />
        <a href="https://hldna.rumsk.vw.vwg/intranet-auto/hldna/f?p=210:2505:3011781230151:BCBACK1:::P2505_BC:BC2086552" target="_blank" className="w-[250px] bg-white border-2 border-emerald-500 rounded-md text-sm text-center p-2 self-center" onClick={onClose}>Перейти на портал</a>
      </div>
    )
  }
}

export default Help;
