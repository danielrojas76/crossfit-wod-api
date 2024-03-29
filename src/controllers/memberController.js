const memberSerivice = require('../services/memberService');

const getAllMembers = (req, res) =>{
    try {
        const allMembers = memberSerivice.getAllMembers();
        res.send({ status: "OK", data: allMembers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data: { error: error?.message ||error } });
    }
}

const getOneMember = (req, res) => {
    const {
        params: { memberId },
    } = req;
    if(!memberId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':memberId' can not empty"},
        });
    }
    try {
        const member = memberSerivice.getOneMember(memberId);
        res.send({ status: "OK", data: member });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error}});
    }
}

module.exports = {
    getAllMembers,
    getOneMember
}