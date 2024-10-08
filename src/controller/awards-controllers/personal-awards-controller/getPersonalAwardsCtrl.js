/**
 * Get Personal Awards Info From Client Operations Handler
 * Project: CBS-Research-Group-Backend
 * Author: Kunal Chandra Das
 * Date: 16/08/2024
 * Last update: 08/10/2024
 * Description:
 * This controller handles the process of retrieving and sending all personal
 * awards information to the client based on user requests. It provides a
 * comprehensive view of all personal awards data as requested.
 *
 * Functionality:
 * - Receives and processes requests to retrieve personal awards information.
 * - Queries the database to gather all relevant personal awards data.
 * - Sends the collected personal awards data to the client.
 * - Provides appropriate responses for successful and failed data retrieval.
 *
 * Usage:
 * Use this controller to manage client requests for retrieving and viewing
 * personal awards information. It ensures that clients receive accurate and
 * complete data regarding personal awards.
 */

const personalAwardsModel = require('../../../models/awards-model/personal-awards-model/personalAwardsModel');
const NodeCache = require('node-cache');
const personalAwardCache = new NodeCache();
const getPersonalAwardsCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      // Check if personal award is in cache
      const cachedSinglePersonalAward = personalAwardCache.get(
        'single_personal_award'
      );
      if (cachedSinglePersonalAward) {
        return res.status(200).json(cachedSinglePersonalAward);
      } else {
        const getRequestedPersonalAward = await personalAwardsModel.findById(
          id
        );
        if (!getRequestedPersonalAward) {
          return res.status(404).json({
            issue: 'Not found!',
            details: 'Requested resources are not found.',
          });
        } else {
          // Cache the retrieved personal award
          personalAwardCache.set(
            'single_personal_award',
            getRequestedPersonalAward
          );
          return res.status(200).json(getRequestedPersonalAward);
        }
      }
    } else {
      // Check if personal award is in cache
      const allCachedPersonalAward =
        personalAwardCache.get('all_personal_award');
      if (allCachedPersonalAward) {
        return res.status(200).json(allCachedPersonalAward);
      } else {
        const getAllPersonalAwards = await personalAwardsModel.find();
        if (!getAllPersonalAwards) {
          return res.status(404).json({
            issue: 'Not found!',
            details: 'Requested resources are not found.',
          });
        } else {
          // Cache the retrieved personal award
          personalAwardCache.set('all_personal_award', getAllPersonalAwards);
          return res.status(200).json(getAllPersonalAwards);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      issue: error.message,
      details:
        'Unable to find requested resources due to some technical problem.',
    });
  }
};
module.exports = { getPersonalAwardsCtrl, personalAwardCache };