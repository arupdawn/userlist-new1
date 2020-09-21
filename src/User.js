import React, { useState } from "react";
import "./User.css";
import Prof_Pic from "./Photos/Prof_Image.jpg";

function User({ id, real_name, activity_periods, timezone, showUsersActivity, message }) {
    
    
  return (
    <div className="user">
      <div className="user__content">
        <div className="user__infoTop">
          <img src={Prof_Pic} />

          <div className="user__briefInfo">
            <a href="#" data-toggle="collapse" data-target={"#user" + id}>
              <h5>{real_name}</h5>
            </a>
            <p className="user__seen">
              <strong>
                {"last seen on "}
                {activity_periods[activity_periods.length - 1].end_time}
              </strong>
            </p>
            <p className="user__location">
              {"Lives in "}
              {timezone}
            </p>
          </div>

        </div>

        <div id={"user" + id} className="collapse">
            <hr></hr>
            <p>
              <strong className="user__lastActive">Last Active :</strong>{" "}
              {activity_periods[activity_periods.length - 1].start_time}
              {" - "}
              {activity_periods[activity_periods.length - 1].end_time}
            </p>
            <label className="user__activityCheck">
              <strong>Check user activity on date : </strong>
            </label>{" "}
            <input
              type="date"
              className="user__date"
              name={id}
              onChange={showUsersActivity}
            ></input>
            <br></br>
            <h6 id={id} className="user__message">
              {message}
            </h6>
            <button
              href="#"
              data-toggle="collapse"
              className="btn btn-danger"
              data-target={"#user" + id}
            >
              Close it
            </button>
          </div>

      </div>
    </div>
  );
}

export default User;
