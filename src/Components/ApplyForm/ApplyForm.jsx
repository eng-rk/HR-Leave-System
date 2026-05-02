

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";



function ApplyForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) return "";

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff = (end - start) / (1000 * 60 * 60 * 24) + 1;

    return diff > 0 ? diff : 0;
  };


  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form className="card shadow-lg border-0 p-4 rounded-4" style={{ width: "500px" }}>
        
       
        <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-2">
          <FontAwesomeIcon icon={faCalendarDays} />
          <h5 className="mb-0">Apply for Leave</h5>
        </div>

  
        <div className="mb-3">
          <label className="form-label">Leave Type *</label>
          <select className="form-select" required>
            <option value="">Select leave type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Annual Leave</option>
          </select>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Start Date *</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="col">
            <label className="form-label">End Date *</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        
        <div className="mb-3">
          <label className="form-label">Number of Days</label>
          <input
            type="text"
            className="form-control bg-light"
            value={calculateDays()}
            disabled
          />
        </div>

      
        <div className="mb-3">
          <label className="form-label">Reason *</label>
          <textarea className="form-control" rows="3" required />
        </div>

       
        <div className="mb-3">
          <label className="form-label">Reporting Manager</label>
          <input type="text" className="form-control" value="Sarah Johnson" disabled />
        </div>


        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
            Submit
          </button>
          <button type="button" className="btn btn-outline-secondary w-100">
            Save Draft
          </button>
        </div>

      </form>
    </div>
  );
}


export default ApplyForm;
