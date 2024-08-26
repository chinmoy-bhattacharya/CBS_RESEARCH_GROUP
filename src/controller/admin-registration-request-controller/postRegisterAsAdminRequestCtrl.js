/**
 * Post Register As Admin Request Form Operations Handler
 * Project: CBS-Research-Group-Backend
 * Author: Kunal Chandra Das
 * Date: 21/08/2024
 *
 * Description:
 * This controller handles the process of submitting a registration request
 * for users who wish to become admin users of CBS Research Group. It
 * manages the creation and submission of these requests.
 *
 * Functionality:
 * - Receives and processes registration requests from users who want to
 *   become admin users.
 * - Validates the submitted information to ensure it meets required
 *   criteria.
 * - Saves the registration request to the system or database.
 * - Provides appropriate responses for successful and failed submissions.
 *
 * Usage:
 * Use this controller to handle the submission of admin registration
 * requests. It ensures that user requests to become admins are properly
 * processed and stored in the system.
 */

const {
  clearCache,
} = require("../../middlewares/cache-middleware/cacheMiddleware");
const adminRegistrationRequestMessageModel = require("../../models/admin-registration-request-model/adminRegisterRequestModel");
const authAdminUserModel = require("../../models/auth-admin-model/authAdminUserModel");

const postRegisterAsAdminRequestCtrl = async (req, res) => {
  const { reqUserName, reqUserEmail, message, termsAndConditions } = req.body;
  try {
    if (reqUserName && reqUserEmail && termsAndConditions) {
      const getCurrentAdminInfo = await authAdminUserModel.findOne({
        adminUserEmail: reqUserEmail,
      });
      if (getCurrentAdminInfo) {
        return res.status(400).json({
          issue: "Bad Request!",
          details: "Admin user already exist with this email id.",
        });
      } else {
        const storeRequest = new adminRegistrationRequestMessageModel({
          reqUserName: reqUserName,
          reqUserEmail: reqUserEmail,
          message: message,
          termsAndConditions: termsAndConditions,
        });
        const saveDetails = await storeRequest.save();
        if (!saveDetails) {
          return res.status(501).json({
            issue: "Not implemented!",
            details: "Something went wrong, please try again later.",
          });
        } else {
          clearCache(
            `/iiest-shibpur/chemistry-department/cbs-research-groups/v1/register-request/admin`
          );
          return res.status(201).json({
            details: "Request has been send successfully.",
          });
        }
      }
    } else {
      return res.status(400).json({
        issue: "Bad Request!",
        message: "All fields are require.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      issue: error.message,
      details: "Unable to send the request due to some technical problem.",
    });
  }
};
module.exports = postRegisterAsAdminRequestCtrl;
