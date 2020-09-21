import React, { useState, useEffect } from "react";
import "./Body.css";
import User from "./User";

function Body() {
  const [userData, setUserData] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [message, setMessage] = useState("Hello!!");
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const showUsersActivity = (event) => {
    let userId,
      inputdate,
      activeDate,
      activity_period,
      position = 0,
      message1 = "Not Active on this day",
      element;
    userId = event.target.name;
    setCurrentUserId(userId);

    inputdate = String(event.target.value);

    if (currentUserId == userId) {
      element = document.getElementById(userId);
      element.style.display = "block";
      //setMessage("Kya be!!");
    } else {
      element = document.getElementById(currentUserId);
      element.style.display = "none";
      element = document.getElementById(userId);
      element.style.display = "block";
      console.log("Element is >>> ", element);
      //setMessage("Nahi be!!");
    }

    for (let i = 0; i < userData.length; i++) {
      // Finding the position of the user for which activity has to be checked
      if (userId == userData[i].id) position = i;
    }
    activity_period = userData[position].activity_periods;

    for (let i = 0; i < activity_period.length; i++) {
      //  Checking users active for a particular date or not
      activeDate = getOnlyDate(activity_period[i].start_time);
      if (activeDate == inputdate) {
        message1 =
          "" +
          activity_period[i].start_time +
          " - " +
          activity_period[i].end_time;
        break;
      }
    }
    setMessage(message1);
  };

  const getOnlyDate = (startTime) => {
    let date = "",
      c,
      spacecounter = 0,
      month,
      day,
      year,
      temporaryDate = "",
      dashcounter = 0,
      finaldate;

    for (let i = 0; i < startTime.length; i++) {
      c = startTime.charAt(i);
      if (spacecounter < 3) {
        if (c == " ") {
          spacecounter++;
          date = date + "-";
        } else {
          date = date + c;
        }
      } else {
        break;
      }
    }

    for (let i = 0; i < date.length - 1; i++) {
      //Finding individual month,day and year from the extracted date
      c = date.charAt(i);
      if (c == "-") {
        dashcounter++;
        if (dashcounter == 1) {
          month = temporaryDate;
          temporaryDate = "";
        } else if (dashcounter == 2) {
          day = temporaryDate;
          let daynum = Number(day);
          if (daynum < 10) {
            day = "0" + day;
          }
          temporaryDate = "";
        }
      } else {
        temporaryDate = temporaryDate + c;
      }
    }
    year = temporaryDate;

    for (let i = 0; i < months.length; i++) {
      //Changing the format of month to number
      if (month == months[i]) {
        month = i + 1;
        if (i < 10) {
          month = "0" + month;
        }
      }
    }
    finaldate = year + "-" + month + "-" + day;

    return finaldate;
  };

  useEffect(() => {
    const getData = async () => {
      fetch("http://localhost:8000/members")
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          let newArr = [...data];
          setUserData(newArr);
          setCurrentUserId(newArr[0].id);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    getData();
  }, []);

  console.log("Userdata is >> " + userData[0]?.id);

  return (
    <div className="body">
      {userData.map((user) => {
        return (
          <>
            <User
              id={user.id}
              real_name={user.real_name}
              timezone={user.tz}
              activity_periods={user.activity_periods}
              showUsersActivity={showUsersActivity}
              message={message}
            />
          </>
        );
      })}
    </div>
  );
}

export default Body;
