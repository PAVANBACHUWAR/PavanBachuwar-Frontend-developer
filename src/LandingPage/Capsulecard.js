import React from "react";
import "./Capsulecard.css";
import {formatDateForCapsules, formatYearForCapsules, formatMonthForCapsules} from "../Utils"

function CapsulesCard(props) {
  const {
    capsule_serial,
    capsule_id,
    status,
    original_launch,
    type,
    details,
    missions,
    reuse_count

  } = props.data;

  function BadgeStatus(props) {
    const status = props.status;
    switch (status) {
      case 'unknown' || 'null':
        return <span className="badge bg-danger">{status}</span>
      case 'active':
        return <span className="badge bg-success">{status}</span>
      case 'retired':
        return <span className="badge bg-warning">{status}</span>
      case 'destroyed':
        return <span className="badge bg-info">{status}</span> 
    }
  }
  
  function getMissionsName() {
    if(missions)
        return missions.map(item => ' ' + item.name)
}

function getNumberFlight() {
  if(missions)
      return missions.map(item => ' ' + item.flight)
}

  return(
    <div className="card">
        <div className="card-header no-border">
            <h5 className="card-title">{capsule_serial}</h5>
        </div>
        <div className="card-body pt-0">
            <div className="content">
                <div className="content-wrapper">
                    <div className="content-date">
                        <span className="content-date-day">{formatDateForCapsules(original_launch)}</span>
                        <span className="content-date-month">{formatMonthForCapsules(original_launch)}</span>
                    </div>
                    <div className="info">
                        <span className="info-subtitle">{capsule_id} - <span className="content-date-year">{formatYearForCapsules(original_launch)}</span></span>
                        <span className="info-details">{details}</span>
                    </div>
                </div>
                <div className="description">
                    <div className="description-item"><span>🚀 &nbsp; Type: {type}</span></div>
                    <div className="description-item"><span>🎯 &nbsp; Mission(s): {getMissionsName()}</span></div>
                    <div className="description-item"><span> ✈️ &nbsp; Flight Number: {getNumberFlight()}</span></div>
                    <div className="description-item mt-2"><span>Reused {reuse_count} times</span></div>
                </div>
                <div className="status">
                  <BadgeStatus status={status}></BadgeStatus>
                </div>
            </div>
        </div>
    </div>
  );
};
export default CapsulesCard;