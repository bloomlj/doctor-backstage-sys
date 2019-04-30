'use strict';

const Controller = require('egg').Controller;

class PatientController extends Controller {
  async getPatientInfo() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = '传入id为空';
    }
    const find_result = await ctx.service.patient.findPatientById(id);
    ctx.body = find_result;
  }

  async buff() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = '传入id为空';
    }
    const update_result = await ctx.service.patient.buffPatient(id);
    ctx.body = update_result.msg;
  }

  async releaseBuff() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = '传入id为空';
    }
    const update_result = await ctx.service.patient.releaseBuffPatient(id);
    ctx.body = update_result.msg;
  }
}

module.exports = PatientController;
