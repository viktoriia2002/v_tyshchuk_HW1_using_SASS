(()=>{

//make an AJAX request using Fetch API
fetch('./data/classData.json')
  .then(res => res.json())
  .then(data =>{

       debugger;

    console.log(data);

    handleClassData(data);

  })
    function handleClassData (data) {
       let courseName = document.querySelector('.profPanelText .text-muted'),
       profName = document.querySelector('.profPanelText .professor'),
       classTime = document.querySelector('.profPanelText .list-inline');

       courseName.innerHTML = data.coursename + "-" + '<span class="text-primary">' + data.coursecode + "</span>";
       profName.innerHTML = "Professor - " + data.profname;
       classTime.innerHTML =  "\u231A" + data.classtime[0] + "\u231A" + data.classtime[1]

        }



//.catch((err) =>{
//console.log(err);
//})

})();