function PublishUserText() {
    let allTextUsersDiv = document.getElementById("allTextUsers");
  
    let divUserName = document.createElement("div");
    divUserName.id = "userName";
  
    let divForOneQuestion = document.createElement("div");
    allTextUsersDiv.appendChild(divForOneQuestion);
    divForOneQuestion.id = "divForOneQuestion";
  
    let plusButton = document.createElement("button");
    plusButton.style.width = "40px";
    plusButton.style.height = "30px";
  
    plusButton.style.textAlign = "center";
    plusButton.style.marginTop = "18px";
    plusButton.style.marginRight = "10px";
    plusButton.id = "plusButton";
    plusButton.onclick = function () {
      let newDivForTextarea = document.createElement("div");
      newDivForTextarea.style.width = "450px";
      newDivForTextarea.style.height = "130px";
      newDivForTextarea.style.borderRadius = "18px";
      newDivForTextarea.style.marginLeft = "10px";
      newDivForTextarea.style.backgroundColor = "#C7AC9D";
  
      let publishButton = document.createElement("button");
      publishButton.style.width = "80px";
      publishButton.style.height = "25px";
      publishButton.innerHTML = "Publish";
      publishButton.style.textAlign = "center";
      publishButton.style.marginTop = "18px";
      publishButton.style.marginRight = "10px";
      publishButton.id = "publishButtonComment";
  
      let TextareaComment = document.createElement("textarea");
      TextareaComment.style.marginTop = "28px";
      TextareaComment.style.borderRadius = "18px";
      TextareaComment.id = "userTextWrittenComment";
      TextareaComment.rows = "4";
      TextareaComment.cols = "57";
      TextareaComment.style.marginLeft = "5px";
  
      divForOneQuestion.style.height = "240px";
  
      publishButton.onclick = function () {
        let newParaReplaceTextarea = document.createElement("p");
  
        TextareaComment.style.display = "none";
  
        newParaReplaceTextarea.style.marginTop = "28px";
        newParaReplaceTextarea.style.marginLeft = "5px";
        newParaReplaceTextarea.style.width = "420px";
        newParaReplaceTextarea.style.height = "60px";
        newParaReplaceTextarea.style.fontFamily = "Nunito";
        let TextareaUserText_writtenComment = document.getElementById(
          "userTextWrittenComment"
        ).value;
        newParaReplaceTextarea.innerHTML = TextareaUserText_writtenComment;
        newDivForTextarea.appendChild(newParaReplaceTextarea);
      };
  
      newDivForTextarea.appendChild(TextareaComment);
      divForOneQuestion.appendChild(newDivForTextarea);
    };
  
    let plusAndUserNameDiv = document.createElement("div");
  
    plusAndUserNameDiv.appendChild(divUserName);
  
    plusAndUserNameDiv.style.display = "flex";
    plusAndUserNameDiv.style.justifyContent = "space-between";
  
    divForOneQuestion.appendChild(plusAndUserNameDiv);
  
    let pCreate = document.createElement("p");
    pCreate.innerHTML = "ארגון";
    pCreate.id = "pCreate";
    divUserName.appendChild(pCreate);
  
    let brElement = document.createElement("br");
  
    let userText_written = document.getElementById("UserText").value;
    let newDiv = document.createElement("div");
    newDiv.id = "userTextBox";
    newDiv.innerHTML = userText_written;
    newDiv.style.fontFamily = "Nunito";
    newDiv.style.marginLeft = "20px";
    newDiv.style.width = "450px";
    newDiv.style.height = "40px";
    divForOneQuestion.appendChild(newDiv);
    allTextUsersDiv.appendChild(brElement);
  }
  
  function functionReset() {
    document.getElementById("textAreaForm").reset();
  }
  
  // Get the modal
  var modal = document.getElementById("clean");
  
  // Get the button that opens the modal
  var btn = document.getElementById("a");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  