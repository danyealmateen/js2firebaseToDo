const baseUrl =
  "https://todo-85981-default-rtdb.europe-west1.firebasedatabase.app/";

let userInfoDiv = document.getElementById("userInfoDiv");
let task = document.getElementById("taskHeader");
let button = document.getElementById("button");

async function getData() {
  const url = baseUrl + ".json";
  const response = await fetch(url);
  const data = await response.json();

  let objEntry = Object.entries(data);

  objEntry.forEach((ele) => {
    let userTodo = ele[1].todo.task;
    let userDone = ele[1].todo.done;

    userInfoDiv.innerHTML = `<h4>Name: ${ele[1].name}</h4><h4>Role: ${ele[1].role}</h4>`;
    userObj = ele[1].name;
    task.innerHTML = `<h4>Task: ${userTodo}</h4><h4>${userDone}`;
  });
}

getData();
//Patcha;

button.addEventListener("click", () => {
  async function patchUserInfo(obj) {
    const url = baseUrl + `user1/todo/.json`;

    const init = {
      method: "PATCH",
      body: JSON.stringify(userObj),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
    console.log(obj);
  }
  let userObj = {
    done: false,
    task: "cleaned",
  };

  if (userObj.done === false) {
    userObj.done = true;
    userObj.task = `CLEANED!`;
    console.log("Trueeee and done");
  }

  userObj.done = true;

  patchUserInfo(userObj);
  getData();
});
