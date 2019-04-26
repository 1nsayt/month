function createCalendar(year, month) {
    let div = document.createElement("div");
    div.id = "div"; 
    div.className = "container";
    document.body.append(div);
  
  
   let formatter = new Intl.DateTimeFormat("en", {
      weekday: "short"
    });
    let dateWeek = new Date();
    let nameWeek = [];
    let itemOut = document.createElement("div");
    itemOut.className = "itemOut";
    div.append(itemOut)
    
    for (let i = 1; i <= 7; i++) {
      dateWeek.setDate(i);
      let nameMonth = formatter.format(dateWeek);
      let item = document.createElement("div");
      item.innerHTML = nameMonth;
      item.className = "weekday";
      itemOut.append(item);
      nameWeek.push(nameMonth);
    }  
  
  
    let curData = new Date(year, month);
    let maxNumber = new Date(year, month + 1, 0).getDate();
  
		let count = 1;
    for (let i = 0; i <= 4; i++) {
      let itemOut = document.createElement("div");
      itemOut.className = "itemOut";
      div.append(itemOut);
         for (let j = 0; j <= 6; j++) {
              let inner = document.createElement("div");
              inner.className = "day"; 
              itemOut.append(inner);
							curData.setDate(count);
							let curNameWeek = formatter.format(curData);
							if( curNameWeek === nameWeek[j] && count <= maxNumber ) {inner.innerHTML = count; count++;} 
       } 
    }
  } 

let year = prompt("write year", "here...");
let month = prompt("write month", "here...");
  createCalendar(year, month);