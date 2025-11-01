fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("data::", data);
    const cardTitles = document.getElementsByClassName("card-title");
    const currentTime = document.getElementsByClassName("current");
    const previousTime = document.getElementsByClassName("previous");

    const populatedData = data.map((act, idx) => {
      if (cardTitles[idx]) {
        cardTitles[idx].textContent = act.title;
      }
      return act.title;
    });

    console.log("populatedData::", populatedData);
    const handleDaily=()=>{
        data.map((act,idx)=>{
            currentTime[idx].textContent = `${act.timeframes.daily.current}`;
            previousTime[idx].textContent =`${act.timeframes.daily.previous}`;
        })
    };
    const handleWeekly=()=>{
        data.map((act,idx)=>{
            currentTime[idx].textContent = `${act.timeframes.weekly.current}`;
            previousTime[idx].textContent = `${act.timeframes.weekly.previous}`;
        })
    };
    const handleMonthly=()=>{
        data.map((act,idx)=>{
            currentTime[idx].textContent = `${act.timeframes.monthly.current}`;
            previousTime[idx].textContent = `${act.timeframes.monthly.previous}`;
        })
    };
// ------------------------------------------------------------------
    const dailyBtn = document.getElementById("btn-daily");
    const weekBtn = document.getElementById("btn-weekly");
    const monthBtn = document.getElementById("btn-monthly");

    dailyBtn.addEventListener("click", handleDaily);
    weekBtn.addEventListener("click", handleWeekly);
    monthBtn.addEventListener("click", handleMonthly);

  })
  .catch((error) => {
    console.error("Error::", error);
  });


