// esconder elemento
//document.getElementById("text").style.visibility = 'hidden';



 const textInput = document.getElementById('text');
    const copyButton = document.getElementById('copy');

    copyButton.addEventListener('click', ()=> {
      textInput.select();
      document.execCommand('copy');
    });