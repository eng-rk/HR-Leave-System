const express = require('express');
const router = express.Router();
const { createLeaveRequest, updateLeaveStatus, getMyLeaves, getAllLeaves } = require('../Controllers/leaveRequestController');
const { verifyTocken, verifyHR } = require('../middleware/verifyToken_role');

// Employee: view own leave history
router.get('/my', verifyTocken, getMyLeaves);

// Employee: submit a leave request
router.post('/', verifyTocken, createLeaveRequest);

// HR only: view all leave requests (optional ?status=Pending filter)
router.get('/', verifyHR, getAllLeaves);

// HR only: approve or reject a leave request
router.put('/:id/status', verifyHR, updateLeaveStatus);

module.exports = router;
