"use client";
export default function App() {
  function send(event: React.FormEvent, php: string) {
    console.log("Отправка запроса");
    event.preventDefault();

    let req = new XMLHttpRequest();
    req.open("POST", php, true);
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        const data = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(data);

        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (data.result == "success") {
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
        // Если не удалось связаться с php файлом
      } else {
        alert("Ошибка сервера. Номер: " + req.status);
      }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
      alert("Ошибка отправки запроса");
    };
    const target = event.target as HTMLFormElement;
    req.send(new FormData(target));
  }
  return (
    <>
      <h1>Main</h1>
      <form
        encType="multipart/form-data"
        method="POST"
        id="form"
        onSubmit={(e) => {
          send(e, "./send.php");
        }}
      >
        <p>Имя</p>
        <input placeholder="Представьтесь" name="name" type="text" />
        <p>Email</p>
        <input placeholder="Укажите почту" name="email" type="text" />
        <p>Сообщение</p>
        <textarea name="text"></textarea>
        <p>Прикрепить файлы</p>
        <input type="file" name="myfile[]" multiple id="myfile" />
        <div>
          <input value="Отправить" type="submit" />
        </div>
      </form>
    </>
  );
}
