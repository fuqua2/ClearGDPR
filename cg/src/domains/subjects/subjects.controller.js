const SubjectsService = require('./subjects.service');
const { pick } = require('underscore');

class SubjectsController {
  constructor(subjectsService = null) {
    this.subjectsService = subjectsService || new SubjectsService();
  }

  async giveConsent(req, res) {
    await this.subjectsService.registerConsentToProcessData(
      req.subject.id,
      req.body.personalData,
      req.body.processors || []
    );

    res.send('OK');
  }

  async requestDataAccess(req, res) {
    const subjectData = await this.subjectsService.getData(req.subject.id);
    return res.json(subjectData);
  }

  async eraseData(req, res) {
    await this.subjectsService.eraseDataAndRevokeConsent(req.subject.id);
    res.send('OK');
  }

  async getPersonalDataStatus(req, res) {
    res.json(await this.subjectsService.getPerProcessorDataStatus(req.subject.id));
  }

  async initiateRectification(req, res) {
    res.json(
      await this.subjectsService.initiateRectification(
        req.subject.id,
        pick(req.body, ['rectifcationPayload', 'requestReason'])
      )
    );
  }
}

module.exports = SubjectsController;
